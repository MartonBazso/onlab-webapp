import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/shared/login/login.component';
import { RegisterComponent } from './modules/shared/register/register.component';
import { SubjectEditComponent } from './modules/subject/subject-edit/subject-edit.component';
import { SubjectListComponent } from './modules/subject/subject-list/subject-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'subjects', pathMatch: 'full' },
  {
    path: 'subjects', children: [
      { path: '', component: SubjectListComponent },
      { path: 'edit/:id', component: SubjectEditComponent },
      { path: 'create', component: SubjectEditComponent },
    ]
  },

  {
    path: 'schools', children: [
      { path: '', component: SubjectListComponent },
      { path: 'edit/:id', component: SubjectEditComponent },
      { path: 'create', component: SubjectEditComponent },
    ]
  },
  {
    path: 'majors', children: [
      { path: '', component: SubjectListComponent },
      { path: 'edit/:id', component: SubjectEditComponent },
      { path: 'create', component: SubjectEditComponent },
    ]
  },
  {
    path: 'teachers', children: [
      { path: '', component: SubjectListComponent },
      { path: 'edit/:id', component: SubjectEditComponent },
      { path: 'create', component: SubjectEditComponent },
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
