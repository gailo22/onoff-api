import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonpModule, Jsonp, Response } from '@angular/http';

import { JmxService } from './jmx.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoadingIndicatorService } from './loading-indicator.service';


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
    MatTabsModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ],
  providers: [JmxService, LoadingIndicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
