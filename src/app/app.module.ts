import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

import { HttpModule, JsonpModule } from '@angular/http';
import { AddProjectComponent } from './add-project/add-project.component';

const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent, AdminComponent]
})
export class AppModule { }
