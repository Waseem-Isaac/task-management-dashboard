import { Component, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../../core/services/auth.service';
import { Footer } from '../../../shared/components/footer/footer';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

// TODO: postponed — re-enable when confirm password field is added back
// function passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
//   const password = group.get('password')?.value;
//   const confirm = group.get('confirmPassword')?.value;
//   return password && confirm && password !== confirm ? { passwordsMismatch: true } : null;
// }

@Component({
  selector: 'app-set-password',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    Footer
  ],
  templateUrl: './set-password.component.html',
  styleUrls: [
    '../join/join.component.scss',
    './set-password.component.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class SetPasswordComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  private snackbar = inject(MatSnackBar);

  token = signal<string | null>(null);
  invitedName = signal<string>('');

  isValidating = signal(false);
  tokenError = signal('');
  isSubmitting = signal(false);
  showPassword = signal(false);
  // showConfirm = signal(false); // TODO: postponed

  form = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    // confirmPassword: ['', Validators.required], // TODO: postponed
  });

  ngOnInit(): void {
    const token = this.route.snapshot.paramMap.get('token');
    if (!token) {
      this.isValidating.set(false);
      this.tokenError.set('No invitation token provided. Please use the link from your email.');
      return;
    }

    this.token.set(token);

    this.authService.validateInvitation(token).subscribe({
      next: (data) => {
        this.invitedName.set(data.name);
        this.isValidating.set(false);
      },
      error: () => {
        this.isValidating.set(false);
        this.tokenError.set('This invitation link is invalid or has already been used.');
      },
    });
  }

  getFieldError(field: 'password'): string {
    const control = this.form.get(field);
    if (!control?.touched) return '';
    if (control.hasError('required')) return 'This field is required';
    if (control.hasError('minlength'))
      return `Minimum ${control.errors?.['minlength'].requiredLength} characters`;
    return '';
  }

  // get confirmMismatch(): boolean { // TODO: postponed
  //   const confirm = this.form.get('confirmPassword');
  //   return !!confirm?.touched && !!this.form.hasError('passwordsMismatch');
  // }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    const { password } = this.form.value;

    this.authService.setPassword(this.token()!, password!).subscribe({
      next: () => {
        this.snackbar.open('Password set successfully!', '', 
          { 
            duration: 3000 , 
            panelClass: ['snackbar-success'] , horizontalPosition: 'center', verticalPosition: 'top'
          });
        this.router.navigate(['/auth/login']);
      },
      error: () => {
        this.snackbar.open('Failed to set password. Please try again.', '', 
          { 
            duration: 3000 , 
            panelClass: ['snackbar-error'] , horizontalPosition: 'center', verticalPosition: 'top'
          });
        this.isSubmitting.set(false);
      },
    });
  }
}
