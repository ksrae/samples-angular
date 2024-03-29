import { NgModule } from '@angular/core';
import { NG_VALIDATORS, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive/reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
