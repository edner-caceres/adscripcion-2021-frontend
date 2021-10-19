import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogConfirmComponent } from 'src/app/shared/components/dialogs/confirm/dialog-confirm.component';
import { StudentFormComponent } from '../student-form/student-form.component';
import { Student } from '../student.model';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentsService: StudentsService, private _snackBar: MatSnackBar,  public dialog: MatDialog) { }

  ngOnInit(): void {
    this.studentsService.getStudents().subscribe((result:Student[]) => {
      this.students = result;
    },
    (error: any) => {
      this._snackBar.open(error,'');
    });
  }

  addStudent(): void{
    let student: Student = {id: 0, name: '', email: ''}
    const dialogRef = this.dialog.open(StudentFormComponent, {
      data: student
    });

    dialogRef.afterClosed().subscribe((data:Student) => {
      
      if(data){
        
        this.studentsService.saveStudent(data).subscribe((result: any) => {
          this.students.push(data);   
          this._snackBar.open('Student has been added', 'Success', {
            duration: 5000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
          });       
        },
        error => {
          this._snackBar.open(error,'');
        })
      }
    });
  }

  editStudent(student: Student): void{
    
    const dialogRef = this.dialog.open(StudentFormComponent, {
      data: {...student}
    });

    dialogRef.afterClosed().subscribe((data:Student) => {
      
      if(data){
        this.studentsService.saveStudent(data).subscribe((result: any) => {
          student.name = data.name;
          student.email = data.email;
          student.dob = data.dob;
          
          this._snackBar.open('Student has been updated', 'Success', {
            duration: 5000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
          });
        },
        error => {
          this._snackBar.open(error,'');
        })
      }
    });
  }

  deleteStudent(student:Student): void{
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '250px',
      data: {title: 'Delete', message: 'Would you like to delete this student?'}
    });

    dialogRef.afterClosed().subscribe(answer => {
      if(answer === 'Yes'){
        this.studentsService.deleteStudent(student.email).subscribe((result: any) => {
          const index = this.students.indexOf(student, 0);
          if (index > -1) {
            this.students.splice(index, 1);
            this._snackBar.open('Student has been removed', 'Success', {
              duration: 5000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
            });
          }
        },
        error => {
          this._snackBar.open(error,'');
        })
      }
    });
  }

}
