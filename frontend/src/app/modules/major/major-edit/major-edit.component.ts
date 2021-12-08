import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SchoolService } from '../../school/services/school.service';
import { IdNameModel } from '../../shared/models/id-name.interface';
import { EnumService } from '../../shared/services/enum.service';
import { MajorService } from '../services/major.service';

@Component({
  selector: 'app-major-edit',
  templateUrl: './major-edit.component.html',
  styleUrls: ['./major-edit.component.scss']
})
export class MajorEditComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  inProgress: boolean = false;
  private id: number | null = null;
  categories: IdNameModel[] = [];
  schools: IdNameModel[] = [];

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private service: MajorService,
    private enumService: EnumService,
    private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      schoolId: ['', Validators.required],
      averageNumberOfStudents: ['', Validators.required],
      workChances: ['', Validators.required],
      numberOfSemesters: ['', Validators.required],
    });

    this.schoolService.getSchoolIdNameModels().subscribe(res => {
      this.schools = res;
    });

    if (this.id) {
      this.service.get(this.id).subscribe(data => {
        console.log(data);
        this.form.addControl('id', this.fb.control(data.id));
        this.form.patchValue(data);
      });
    }

    this.enumService.categories.subscribe(categories => {
      this.categories = categories;
    });
  }

  onSubmit() {
    this.inProgress = true;
    if (this.id) {
      this.service.update(this.form.value).subscribe(() => {
        this.inProgress = false;
        this.router.navigate(['/majors']);
      });
      return;
    }

    this.service.add(this.form.value).subscribe(() => {
      this.inProgress = false;
      this.router.navigate(['/majors']);
    });

  }

}
