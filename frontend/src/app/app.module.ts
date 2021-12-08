import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SharedModule } from './modules/shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SubjectModule } from './modules/subject/subject.module';
import { SchoolModule } from './modules/school/school.module';
import { MajorModule } from './modules/major/major.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { initializeEnum } from './services/initializer.service';
import { EnumService } from './modules/shared/services/enum.service';

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
    { provide: 'BASE_URL', useValue: 'https://localhost:44396/api' },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeEnum,
      deps: [EnumService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
