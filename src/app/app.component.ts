import { Model } from './model/model';
import { Erro } from './model/model';
import { OweathermapService } from './oweathermap.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = null;
  form: FormGroup;
  title = 'adtsyspoke';
  pokemon: any;
  pokemondetalhes: any;
  erro: Erro;
  constructor(private fb: FormBuilder, private service: OweathermapService) {
    this.criarformulario();
  }

  private criarformulario() {
    this.form = this.fb.group({
      cidade: new FormControl('', [Validators.required])
    });
  }

  pesquisar() {
    this.erro = null;
    this.model = null;
    this.service.pesquisar(this.form.controls.cidade.value)
      .subscribe(value => {
        this.model = new Model();
        this.model.clima = {
          temperatura: value.main.temp,
          chovendo: value.weather[0].main === 'Rain' ? 'Sim' : 'Não'
        };
      },
        err => {
          if (err.error) {
            this.erro = err.error;
          } else {
            this.erro = {
              cod: 'undefined',
              message: 'ocorreu um erro inesperado'
            };
          }
        });
  }
}
