import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.scss']
})
export class SubjectEditComponent implements OnInit {
  
  public subjectForm: FormGroup = new FormGroup({});
  private id: number | null = null;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
    this.subjectForm = this.fb.group({
      name: [''],
      description: [''],
      duration: [''],
      startDate: [''],
      endDate: [''],
      status: [''],
      image: [''],
      price: [''],
      type: [''],
      level: [''],
      category: [''],
      teacher: [''],
      students: [''],
      lessons: ['']
    });

    if (this.id) {
      this.subjectService.getSubjectById(this.id).subscribe(data => {
        this.subjectForm.patchValue(data);
      });
    }
  }

  onSubmit() {
    this.router.navigate(['/subjects']);
  }
}
