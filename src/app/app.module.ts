import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BoxComponent } from './box/box.component';
import { Gen1Component } from './gen1/gen1.component';
import { PokefinderService } from './pokefinder.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, BoxComponent, Gen1Component, routingComponents ],
  bootstrap:    [ AppComponent ],
  providers: [PokefinderService]
})
export class AppModule { }
