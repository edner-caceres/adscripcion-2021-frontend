import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogConfirmComponent } from './components/dialogs/confirm/dialog-confirm.component';
@NgModule({
    imports: [
        MatButtonModule,
        MatDialogModule,
        MatSnackBarModule
    ],
    exports: [DialogConfirmComponent],
    declarations: [DialogConfirmComponent],
    providers: [],
})
export class SharedModule { }
