import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokedisplay',
  templateUrl: './pokedisplay.component.html',
  styleUrls: ['./pokedisplay.component.css']
})
export class PokedisplayComponent implements OnInit {

  public pokemon: number = 1;

  constructor(private route: ActivatedRoute,
    private router: Router) { 
    
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('poke');
    
    //this.pokemon= id;
    console.log(id);
    //this.pokemon = id;
  }

  onClickMe(){
    console.log(this.router.url);
    const id = this.router.url;

    //const regex = /(?<=\/)\d+/;
    const result = id.match(/(?<=\/)\d+/);
    //const id = +this.route.snapshot.paramMap.get('poke');

    console.log(result[0]);
    this.pokemon = +result[0]; 
    console.log(this.router.url);
  }
}