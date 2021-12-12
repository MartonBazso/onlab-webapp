import { Injectable } from "@angular/core"
import { BehaviorSubject, Observable, of } from "rxjs";

Injectable()
export class SearchService {
  private _entities: BehaviorSubject<any[]>;
  private fullList: any[];
  get entities(): Observable<any[]> {
    return this._entities.asObservable();
  }

  setEntities(entities: any[]){
      this.fullList = entities;
      this._entities.next(this.fullList);
  }

  search(value: string){
    if (!value) {
      this._entities.next(this.fullList);
      return;
    }
    this._entities.next(this.fullList.filter(item => item.name.toLowerCase().includes(value.toLowerCase())));

  }

  constructor() {
    this._entities = new BehaviorSubject([]);
  }

}
