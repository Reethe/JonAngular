import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokedisplayComponent } from './pokedisplay/pokedisplay.component';

const routes: Routes = [
  { path: 'pokedisplay', component: PokedisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
