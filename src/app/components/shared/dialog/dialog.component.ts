import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogInterface } from 'src/app/interfaces/dialog.interface';
import { StateService } from 'src/app/services/shared/state.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogData: DialogInterface,
    public stateService: StateService
  ) {}
  ngOnInit(): void {}

  handleDialogSubmit() {
    this.stateService.isAsyncOperationRunning$.next(true);
    setTimeout(() => {
      this.dialogData.callbackMethod();
      this.stateService.isAsyncOperationRunning$.next(false);
    }, 500);
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}
