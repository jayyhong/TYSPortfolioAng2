import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HttpModule, JsonpModule } from '@angular/http';
import { AddProjectComponent } from './add-project/add-project.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'admin', component: AdminComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent,
    FileSelectDirective,
    AdminComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
