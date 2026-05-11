import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { TeamService } from '../team.service';
import { UserFormData } from '../../../shared/models/user.model';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule
  ],
  templateUrl: './team-member-add.component.html',
  styleUrls: ['./team-member-add.component.scss'],
})
export class TeamMemberAddComponent {
  private teamService = inject(TeamService);
  private dialogRef = inject(MatDialogRef<TeamMemberAddComponent>);
  private fb = inject(FormBuilder);
  private snackbar = inject(MatSnackBar);
  isSubmitting = signal(false);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });

  getFieldError(field: 'name' | 'email'): string {
    const control = this.form.get(field);
    if (control?.hasError('required')) return 'This field is required';
    if (control?.hasError('minlength'))
      return `Minimum length is ${control.errors?.['minlength'].requiredLength}`;
    if (control?.hasError('email')) return 'Invalid email format';
    return '';
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    this.teamService.addTeamMember(this.form.value as UserFormData).subscribe({
      next: () => {
        this.dialogRef.close(true);
        this.snackbar.open('Team member created successfully!', '', 
          { 
            duration: 3000 , 
            panelClass: ['snackbar-success'] , horizontalPosition: 'center', verticalPosition: 'top'
          });
      },
      error: (err) => {
        console.error('Error creating team member:', err);
        this.snackbar.open(err?.error?.message || 'Failed to create team member. Please try again.', '', 
          { 
            duration: 3000 , 
            panelClass: ['snackbar-error'] , horizontalPosition: 'center', verticalPosition: 'top'
          });
        this.isSubmitting.set(false);
      },
      complete: () => this.isSubmitting.set(false),
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
