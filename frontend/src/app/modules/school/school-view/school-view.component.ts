import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchService } from '../../shared/search/search.service';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-school-view',
  templateUrl: './school-view.component.html',
  styleUrls: ['./school-view.component.scss'],
  providers: [SearchService]
})
export class SchoolViewComponent implements OnInit {
  schools = [];
  constructor(public dialog: MatDialog,
    private service: SchoolService,
    public searchService: SearchService) { }

  ngOnInit(): void {
    this.service.list();
    this.service.entities.subscribe(res => {
      this.searchService.setEntities(res);
    });

    this.searchService.entities.subscribe(res => {
      this.schools = res;
    });
  }
}
