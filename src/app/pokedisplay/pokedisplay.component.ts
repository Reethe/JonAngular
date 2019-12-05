import { Component, OnInit } from '@angular/core';
import { PokefinderService } from '../pokefinder.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokedisplay',
  templateUrl: './pokedisplay.component.html',
  styleUrls: ['./pokedisplay.component.css']
})
export class PokedisplayComponent implements OnInit {

  public pokemon: any = 1;
  currPoke: Pokemon;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private pokeService: PokefinderService) { 
    
  }

  ngOnInit() {
    
  }

  onClickMe(inea: any){
    console.log(inea);
    this.pokemon = inea; 

    this.pokeService.getPokemon(inea).subscribe(
      (resp) => {
        this.currPoke =resp;
        console.log(this.currPoke);
      }
    );

  }
}