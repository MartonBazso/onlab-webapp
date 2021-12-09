import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-school-view',
  templateUrl: './school-view.component.html',
  styleUrls: ['./school-view.component.scss']
})
export class SchoolViewComponent implements OnInit {
  schools = [];
  constructor(public dialog: MatDialog,
    private service: SchoolService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.service.list();
    this.service.entities.subscribe(res => {
      this.schools = res;
    });
  }
}
