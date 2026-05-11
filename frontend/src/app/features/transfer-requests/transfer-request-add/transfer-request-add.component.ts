import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { TransferRequestsService } from '../transfer-requests.service';

@Component({
  selector: 'app-transfer-request-add',
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
  templateUrl: './transfer-request-add.component.html',
  styleUrls: ['./transfer-request-add.component.scss'],
})
export class TransferRequestAddComponent {
  private transferRequestsService = inject(TransferRequestsService);
  private dialogRef = inject(MatDialogRef<TransferRequestAddComponent>);
  private snackbar = inject(MatSnackBar);


  onSubmit(): void {
    this.transferRequestsService.addTransferRequest('memberId').subscribe({
      next: () => {
        this.dialogRef.close(true);
        this.snackbar.open('Transfer request created successfully!', '', 
          { 
            duration: 3000 , 
            panelClass: ['snackbar-success'] , horizontalPosition: 'center', verticalPosition: 'top'
          });
      },
      error: (err) => {
        console.error('Error creating transfer request:', err);
        this.snackbar.open(err?.error?.message || 'Failed to create transfer request. Please try again.', '', 
          { 
            duration: 3000 , 
            panelClass: ['snackbar-error'] , horizontalPosition: 'center', verticalPosition: 'top'
          });
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
