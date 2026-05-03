import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroupDirective, NgForm, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService, RegisterRequest } from '../../../../core/services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private snackbar = inject(MatSnackBar);
  isSubmitting = signal(false);
  showPassword = signal(false);
  showConfirmPassword = signal(false);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  }, { validators: this.passwordsMatchValidator });

  getFieldError(field: 'name' | 'email' | 'password' | 'confirmPassword'): string {
    console.log((field === 'confirmPassword' && this.form.hasError('passwordsMismatch')))
    const control = this.form.get(field);
    if (!control?.touched) return '';
    if (control.hasError('required')) return 'This field is required';
    if (control.hasError('email')) return 'Invalid email format';
    if (control.hasError('minlength'))
      return `Minimum ${control.errors?.['minlength'].requiredLength} characters`;
    if (field === 'confirmPassword' && this.form.hasError('passwordsMismatch'))
      return 'Passwords do not match';
    return '';
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    this.authService.register(this.form.value as RegisterRequest).subscribe({
      next: () => {
        this.snackbar.open('Registration successful!', '', 
          { 
            duration: 3000 , 
            panelClass: ['snackbar-success'] , horizontalPosition: 'center', verticalPosition: 'top'
          });
      
        this.router.navigate(['/board']);
      },
      error: (err) => {
        this.snackbar.open(err?.error?.message ?? 'Registration failed. Please try again.', '',
          { 
            duration: 3000 , 
            panelClass: ['snackbar-error'] , horizontalPosition: 'center', verticalPosition: 'top'
          });
        this.isSubmitting.set(false);
      },
    });
  }


   passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password && confirm && password !== confirm ? { passwordsMismatch: true } : null;
  }

  /**
   * <mat-error> only renders when the control itself is invalid. Since confirmPassword only has Validators.required and its value is filled, the control is valid — 
   *  so <mat-error> never shows, even though getFieldError correctly returns the mismatch message.
   *  The fix is a custom ErrorStateMatcher on the confirmPassword input that also checks the group-level error.
   */
  crossFieldMatcher: ErrorStateMatcher = {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      return !!(control?.touched && (control.invalid || form?.hasError('passwordsMismatch')));
    }
  };
}
