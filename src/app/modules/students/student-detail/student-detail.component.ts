import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../student.model';

@Component({
    selector: 'student-detail',
    templateUrl: 'student-detail.component.html',
    styleUrls:['student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

    @Input()
    student: Student = { id: 0, name : '', email : ''};

    @Output()
    delete = new EventEmitter<Student>();

    @Output()
    edit = new EventEmitter<Student>();

    constructor() { 
    }

    ngOnInit() { }

    editStudent(student: Student): void{
        this.edit.emit(student);
    }

    deleteStudent(student: Student): void{
        this.delete.emit(student);
    }    
}
 