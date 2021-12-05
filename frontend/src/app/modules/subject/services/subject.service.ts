import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  //constructor with httpclient and post method
  constructor(private httpClient: HttpClient) { }

  //get method to get all subjects
  getSubjects() {
    return this.httpClient.get('http://localhost:8080/api/subjects');
  }

  //get method to get subject by id
  getSubjectById(id: number) {
    return this.httpClient.get('http://localhost:8080/api/subjects/' + id);
  }

  //post method to add new subject
  addSubject(subject: any) {
    return this.httpClient.post('http://localhost:8080/api/subjects', subject);
  }

  //put method to update subject
  updateSubject(subject: any) {
    return this.httpClient.put('http://localhost:8080/api/subjects/' + subject.id, subject);
  }

  //delete method to delete subject
  deleteSubject(id: number) {
    return this.httpClient.delete('http://localhost:8080/api/subjects/' + id);
  }


}
