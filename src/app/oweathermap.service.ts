import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OweathermapService {
  private appid = '3484d668a7b2829a1393073c89a18639';

  constructor(private http: HttpClient) { }

  pesquisar(cidade: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${this.appid}`);
  }

  pesquisarpokemon(tipo: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/type/${tipo}`);
  }

  obterpokemon(url: string): Observable<any> {
    return this.http.get(url);
  }
}
