import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { MajorEditComponent } from './modules/major/major-edit/major-edit.component';
import { MajorViewComponent } from './modules/major/major-view/major-view.component';
import { SchoolEditComponent } from './modules/school/school-edit/school-edit.component';
import { SchoolViewComponent } from './modules/school/school-view/school-view.component';
import { LoginComponent } from './modules/shared/login/login.component';
import { Role } from './modules/shared/models/user.interface';
import { RegisterComponent } from './modules/shared/register/register.component';
import { SubjectEditComponent } from './modules/subject/subject-edit/subject-edit.component';
import { SubjectGetComponent } from './modules/subject/subject-get/subject-get.component';
import { SubjectListComponent } from './modules/subject/subject-list/subject-list.component';
import { TeacherViewComponent } from './modules/teacher/teacher-view/teacher-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'subjects', pathMatch: 'full' },
  {
    path: 'subjects', children: [
      { path: '', component: SubjectListComponent },
      {
        path: 'edit/:id',
        component: SubjectEditComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },
      {
        path: 'create',
        component: SubjectEditComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },
      { path: ':id', component: SubjectListComponent },
      { path: 'details/:id', component: SubjectGetComponent },
    ]
  },

  {
    path: 'schools', children: [
      { path: '', component: SchoolViewComponent },
      {
        path: 'edit/:id',
        component: SchoolEditComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },
      {
        path: 'create',
        component: SchoolEditComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },
    ]
  },
  {
    path: 'majors', children: [
      { path: '', component: MajorViewComponent },
      {
        path: 'edit/:id',
        component: MajorEditComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },
      {
        path: 'create',
        component: MajorEditComponent,
        canActivate: [AuthGuard],
        data: {
          roles: [Role.Admin]
        }
      },
      {
        path: ':id',
        component: MajorViewComponent,
      },
    ]
  },
  {
    path: 'teachers', children: [
      { path: '', component: TeacherViewComponent },
      {
        path: 'edit/:id',
        component: SubjectEditComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },
      {
        path: 'create',
        component: SubjectEditComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
