import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogData,
} from '../components/confirmation-dialog/confirmation-dialog.component';

export interface ConfirmableOptions {
  title: string;
  message: string;
}

/**
 * Method decorator that shows a confirmation dialog before running the method.
 * The host component must have a `dialog` property of type `MatDialog`.
 *
 * Usage:
 *   @Confirmable({ title: 'Delete', message: 'Are you sure?' })
 *   deleteUser(id: string): void { ... }
 */
export function Confirmable(options: ConfirmableOptions): MethodDecorator {
  return (_target, _key, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
      const dialog: MatDialog = (this as Record<string, unknown>)['dialog'] as MatDialog;
      if (!dialog) {
        console.warn(
          '@Confirmable: no `dialog` property found on host. Add `dialog = inject(MatDialog)` to the component.',
        );
        return;
      }

      dialog
        .open(ConfirmationDialogComponent, {
          panelClass: 'app-dialog',
          disableClose: true,
          data: { title: options.title, message: options.message } satisfies ConfirmationDialogData,
        })
        .afterClosed()
        .subscribe((confirmed) => {
          if (confirmed) original.apply(this, args);
        });
    };

    return descriptor;
  };
}
