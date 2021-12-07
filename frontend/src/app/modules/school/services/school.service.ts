import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  //constructor with httpclient and post method
  constructor(private httpClient: HttpClient) { }

  //get method to get all Schools
  getSchools() {
    return this.httpClient.get('http://localhost:8080/api/school');
  }

  //get method to get School by id
  getSchoolById(id: number) {
    return this.httpClient.get('http://localhost:8080/api/school/' + id);
  }

  //post method to add new School
  addSchool(entity: any) {
    return this.httpClient.post('http://localhost:8080/api/school', entity);
  }

  //put method to update School
  updateSchool(entity: any) {
    return this.httpClient.put('http://localhost:8080/api/school/' + entity.id, entity);
  }

  //delete method to delete School
  deleteSchool(id: number) {
    return this.httpClient.delete('http://localhost:8080/api/school/' + id);
  }


}
