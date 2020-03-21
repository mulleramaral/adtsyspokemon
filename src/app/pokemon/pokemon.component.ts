import { OweathermapService } from './../oweathermap.service';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Model } from '../model/model';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() model: Model;
  constructor(private service: OweathermapService) {
  }
  loading = false;

  ngOnInit() {
    this.service.pesquisarpokemon(this.model.GetTipoPokemon())
      .subscribe(
        data => {
          const indice = Math.floor(Math.random() * (data.pokemon.length - 1));
          const pokemon = data.pokemon[indice].pokemon;
          this.model.pokemon = {
            nome: pokemon.name,
            detalhes: null
          };
          this.loading = false;
          this.service.obterpokemon(pokemon.url)
            .subscribe(value => this.model.pokemon.detalhes = {
              backDefault: value.sprites.back_default,
              backFemale: value.sprites.back_female,
              backShiny: value.sprites.back_shiny,
              backShinyFemale: value.sprites.back_shiny_female,
              frontDefault: value.sprites.front_default,
              frontFemale: value.sprites.front_female,
              frontShiny: value.sprites.front_shiny,
              frontShinyFemale: value.sprites.front_shiny_female
            });
        }
      );
  }
}
