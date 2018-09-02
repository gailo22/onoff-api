import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonpModule, Jsonp, Response } from '@angular/http';

import { JmxService } from './jmx.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    HttpClientJsonpModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatListModule,
    HttpClientModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ],
  providers: [JmxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
