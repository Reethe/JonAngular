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

  onClickMe(inea: number){
    console.log(inea);
    this.pokemon = inea; 

    
  }
}