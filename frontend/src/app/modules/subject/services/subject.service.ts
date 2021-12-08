import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectService extends CrudService{
  constructor(httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    super(httpClient, baseUrl, 'subjects');
  }

}
