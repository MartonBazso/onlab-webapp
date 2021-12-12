import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IdNameModel } from "src/app/modules/shared/models/id-name.interface";
import { CrudService } from "src/app/modules/shared/services/crud.service";

@Injectable()
export class FileService {
  private _files: BehaviorSubject<IdNameModel[]>;


  public get files(): Observable<IdNameModel[]> {
    return this._files.asObservable();
  }

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this._files = new BehaviorSubject<IdNameModel[]>([]);
  }

  getFiles(subjectId: number) {
    this.httpClient.get<IdNameModel[]>(this.baseUrl + '/materials/getAll/' + subjectId).subscribe(result => {
      this._files.next(result);
    });
  }

  downloadFile(fileId: number) {
    return this.httpClient.get(this.baseUrl + '/materials/' + fileId, { responseType: 'blob' });
  }
}
