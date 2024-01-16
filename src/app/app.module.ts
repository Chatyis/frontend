import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormModule } from './form/form.module';
import { RestApiService } from './rest-api/rest-api.service';
import { ResultsComponent } from './results/results.component';
import { CommonModule } from '@angular/common';

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
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
