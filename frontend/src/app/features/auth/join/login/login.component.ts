import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../../../core/services/auth.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private snackbar = inject(MatSnackBar);
  isSubmitting = signal(false);
  showPassword = signal(false);
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  getFieldError(field: 'email' | 'password'): string {
    const control = this.form.get(field);
    if (!control?.touched) return '';
    if (control.hasError('required')) return 'This field is required';
    if (control.hasError('email')) return 'Invalid email format';
    if (control.hasError('minlength'))
      return `Minimum ${control.errors?.['minlength'].requiredLength} characters`;
    return '';
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    const { email, password } = this.form.value;

    this.authService.login(email!, password!).subscribe({
      next: () => {
        this.snackbar.open('Login successful!', '', 
          { 
            duration: 3000 , 
            panelClass: ['snackbar-success'] , horizontalPosition: 'center', verticalPosition: 'top'
          });
        this.router.navigate(['/dashboard'])
      },
      error: (err) => {
        this.snackbar.open(err?.error?.message ?? 'Invalid credentials. Please try again.', '',
          { 
            duration: 3000 , 
            panelClass: ['snackbar-error'] , horizontalPosition: 'center', verticalPosition: 'top'
          });
        this.isSubmitting.set(false);
      },
    });
  }
}
