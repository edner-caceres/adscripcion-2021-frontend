import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from './student.model';

@Injectable({providedIn: 'root'})
export class StudentsService {
    readonly resource: string = 'students';
    readonly WebAPIURL: string = environment.webapi_url;
    constructor(private http:HttpClient) { }

    getStudents(): Observable<Student[]>{
        return this.http.get<Student[]>(`${this.WebAPIURL}/${this.resource}`);
    }
    
    saveStudent(student: Student){
        if(student.id === 0){
            return this.http.post(`${this.WebAPIURL}/${this.resource}`, student);
        }else{
            return this.http.put(`${this.WebAPIURL}/${this.resource}`, student);
        }        
    }

    deleteStudent(studentEmail: string){
        return this.http.delete(`${this.WebAPIURL}/${this.resource}/${studentEmail}`);
    }
}