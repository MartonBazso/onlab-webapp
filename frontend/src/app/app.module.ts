import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SharedModule } from './modules/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SubjectModule } from './modules/subject/subject.module';
import { SchoolModule } from './modules/school/school.module';
import { MajorModule } from './modules/major/major.module';
import { TeacherModule } from './modules/teacher/teacher.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    SubjectModule,
    SchoolModule,
    MajorModule,
    TeacherModule,
  ],
  providers: [
    { provide: 'BASE_URL', useValue: 'https://localhost:44396/api' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
