import { Model, Clima } from './model/model';
import { Error } from './model/model';
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
  error: Error;
  loading = false;
  constructor(private fb: FormBuilder, private service: OweathermapService) {
    this.criarformulario();
  }

  private criarformulario() {
    this.form = this.fb.group({
      cidade: new FormControl('', [Validators.required])
    });
  }

  pesquisar() {
    this.error = null;
    this.model = null;
    this.loading = true;
    this.service.pesquisar(this.form.controls.cidade.value)
      .subscribe(value => {
        this.model = new Model();
        this.model.clima = new Clima();
        this.model.clima.temperatura = value.main.temp;
        this.model.clima.chovendo = value.weather[0].main === 'Rain' ? 'Sim' : 'Não';
        this.model.clima.idcondicao = +value.weather[0].id.toString()[0];
        this.model.clima.clima = value.weather[0].main;
        this.model.clima.descricao = value.weather[0].description;
        this.model.clima.icone = 'http://openweathermap.org/img/wn/' + value.weather[0].icon + '@2x.png';
        this.loading = false;
      },
        err => {
          this.error = err.error || {
            cod: 'undefined',
            message: 'ocorreu um erro inesperado'
          };
          this.loading = false;
        });
  }
}
