import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Rc1Component } from './rc1/rc1.component';
import { Rc2Component } from './rc2/rc2.component';
import { CountriesComponent } from './countries/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { StatesComponent } from './states/states.component';

@NgModule({
  declarations: [
    AppComponent,
    Rc1Component,
    Rc2Component,
    CountriesComponent,
    StatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
