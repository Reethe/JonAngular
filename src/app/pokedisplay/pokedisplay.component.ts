import { Component, OnInit } from '@angular/core';
import { PokefinderService } from '../pokefinder.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokedisplay',
  templateUrl: './pokedisplay.component.html',
  styleUrls: ['./pokedisplay.component.css']
})
export class PokedisplayComponent implements OnInit {

  public pokemon: number = 1;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private pokeService: PokefinderService) { 
    
  }

  ngOnInit() {
    
  }

  onClickMe(inea: number){
    console.log(inea);
    this.pokemon = inea; 

  

  }
}