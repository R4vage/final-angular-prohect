import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CustomErrorHandler implements ErrorHandler {
  constructor(private snackbar: MatSnackBar) {}
  handleError(error: unknown): void {
    if (error instanceof Response && error.status == 401) {
      this.snackbar.open('The username/password is invalid', 'Close', {
        duration: 2000,
        panelClass: ['bg-red-500', 'text-white', 'font-medium'],
      });
    } else if (error instanceof Error) {
      console.error(error.message, error.name);
      this.snackbar.open(`${error.name}: ${error.message}`, 'Close', {
        duration: 2000,
        panelClass: ['bg-red-500', 'text-white', 'font-medium'],
      });
    } else {
      console.error(error);
      this.snackbar.open('Error was detected! We are working on it!', 'Close', {
        duration: 2000,
        panelClass: ['bg-red-500', 'text-white', 'font-medium'],
      });
    }
  }
}
