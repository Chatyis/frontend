import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArrToRgbValuePipe } from './pipes/arrToRgbValue.pipe';
import { FormModule } from './form/form.module';
import { RestApiService } from './rest-api/rest-api.service';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [					
    AppComponent
   ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    ResultsComponent,
    FormModule,
    HttpClientModule
  ],
  providers: [ArrToRgbValuePipe, RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
