import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AvengersService } from '../app/list/avengers.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ListComponent } from './list/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AvengersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
