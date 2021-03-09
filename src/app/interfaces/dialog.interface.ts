export interface DialogInterface {
  cancelButtonLabel: string;
  confirmButtonLabel: string;
  dialogHeader: string;
  dialogContent: string;
  callbackMethod: () => void;
}
