import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BoxComponent } from './box/box.component';
import { Gen1Component } from './gen1/gen1.component';
import { PokedisplayComponent } from './pokedisplay/pokedisplay.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BoxComponent, Gen1Component, PokedisplayComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
