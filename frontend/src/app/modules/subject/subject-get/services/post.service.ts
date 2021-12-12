import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { CrudService } from "src/app/modules/shared/services/crud.service";

@Injectable()
export class PostService extends CrudService {
  constructor(httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    super(httpClient, baseUrl, "posts");
  }

  listPostsBySubjectId(subjectId: number) {
    this.httpClient.get<any>(`${this.baseUrl}/posts/listBySubject/${subjectId}`).subscribe(result => {
      this.entities.next(result);
    }, error => console.error(error));
  }
}
