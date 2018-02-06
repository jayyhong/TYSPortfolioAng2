import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpModule, JsonpModule } from '@angular/http';
import { AddProjectComponent } from './add-project/add-project.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
