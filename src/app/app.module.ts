import { ErrorComponent } from './../shared/components/error/error.component';
import { LoadingComponent } from './../shared/components/loading/loading.component';
import { OweathermapService } from './oweathermap.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ClimaComponent } from './Clima/Clima.component';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
   declarations: [
      AppComponent,
      ErrorComponent,
      LoadingComponent,
      ClimaComponent,
      PokemonComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [
      FormBuilder,
      OweathermapService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
