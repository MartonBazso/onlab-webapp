import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subject-get',
  templateUrl: './subject-get.component.html',
  styleUrls: ['./subject-get.component.scss']
})
export class SubjectGetComponent implements OnInit {
  subject: any;

  constructor(private service: SubjectService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.service.get(params.id).subscribe(subject => {
        this.subject = subject;
      });
    });
  }

}
