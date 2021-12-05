import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectEditComponent } from './modules/subject/subject-edit/subject-edit.component';
import { SubjectListComponent } from './modules/subject/subject-list/subject-list.component';

const routes: Routes = [
  { path: 'subject', children: [
    { path: '', component: SubjectListComponent },
    { path: 'edit/:id', component: SubjectEditComponent },
    { path: 'create', component: SubjectEditComponent },
  ]},
  { path: '', redirectTo: 'subject', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
