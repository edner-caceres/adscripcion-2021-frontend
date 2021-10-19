import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../student.model';

@Component({
    selector: 'app-student-form',
    templateUrl: 'student-form.component.html',
    styleUrls: ['student-form.component.scss']
})

export class StudentFormComponent implements OnInit {
    studentFormGroup = new FormGroup({
        id: new FormControl(0),
        name : new FormControl('', [Validators.required]),
        email : new FormControl('', [Validators.required, Validators.email]),
        dob : new FormControl('', [Validators.required])
    });
    
    
    constructor(public dialogRef: MatDialogRef<StudentFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Student) { }

    ngOnInit() {
        this.studentFormGroup.patchValue(this.data);
        this.studentFormGroup.valueChanges
        .subscribe( values => {
            console.log(values);
            this.data.id = values.id;
            this.data.name = values.name;
            this.data.email = values.email;
            this.data.dob = values.dob;
        });
     }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
