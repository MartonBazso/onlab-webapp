import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SchoolService } from '../../school/services/school.service';

@Component({
  selector: 'app-school-edit',
  templateUrl: './school-edit.component.html',
  styleUrls: ['./school-edit.component.scss']
})
export class SchoolEditComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  inProgress: boolean = false;
  private id: number | null = null;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private service: SchoolService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required],
      numberOfStudents: [1000],
    });

    if (this.id) {
      this.service.get(this.id).subscribe(data => {
        this.form.addControl('id', this.fb.control(data.id));
        this.form.patchValue(data);
      });
    }
  }

  onSubmit() {
    this.inProgress = true;
    if (this.id) {
      this.service.update(this.form.value).subscribe(() => {
        this.inProgress = false;
        this.router.navigate(['/schools']);
      });
      return;
    }

    this.service.add(this.form.value).subscribe(() => {
      this.inProgress = false;
      this.router.navigate(['/schools']);
    });

  }
}
