import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list/students-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { MatDialogModule } from '@angular/material/dialog';

const studentsRoutes: Routes = [{
  path: '',
  component: StudentsListComponent
}];

@NgModule({
  declarations: [
    StudentsListComponent,
    StudentDetailComponent,
    StudentFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(studentsRoutes),

    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,

    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers: [  
    MatDatepickerModule,  
  ]
})
export class StudentsModule { }
