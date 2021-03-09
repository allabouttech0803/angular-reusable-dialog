import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/shared/dialog/dialog.component';
import { DialogInterface } from './interfaces/dialog.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public dialogSubmissionMessage: string = '';
  constructor(public dialog: MatDialog) {}

  /**
   * This method invokes the first dialog
   */
  openDialogOne() {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'I am created by Reusable dialog',
      dialogContent: 'I am first dialog',
      cancelButtonLabel: 'Cancel',
      confirmButtonLabel: 'Submit',
      callbackMethod: () => {
        this.performDialogSubmitMethodOne();
      },
    };
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: dialogInterface,
    });
  }

  /**
   * This method invokes the second dialog
   */
  openDialogTwo() {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'I am created by Reusable dialog',
      dialogContent: 'I am second dialog',
      cancelButtonLabel: 'Cancel',
      confirmButtonLabel: 'Submit',
      callbackMethod: () => {
        this.performDialogSubmitMethodTwo();
      },
    };
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: dialogInterface,
    });
  }

  performDialogSubmitMethodOne() {
    this.dialogSubmissionMessage = 'The dialog submitted from the Dialog ONE';
  }

  performDialogSubmitMethodTwo() {
    this.dialogSubmissionMessage = 'The dialog submitted from the Dialog TWO';
  }
}
