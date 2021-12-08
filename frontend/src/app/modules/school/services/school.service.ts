import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolService extends CrudService {
  constructor(httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    super(httpClient, baseUrl, 'schools');
  }

  public getSchoolIdNameModels() {
    return this.httpClient.get<any[]>(`${this.baseUrl}/${this._url}/idNameModels`);
  }
}
