import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  private baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.baseUrl + '/heroes');
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.httpClient
      .get<Hero>(this.baseUrl + '/heroes/' + id)
      .pipe(catchError((error) => of(undefined)));
  }

  getRecomendaciones(query: string): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(
      this.baseUrl + '/heroes?q=' + query + '&_limit=6'
    );
  }

  anadirHeroe(heroe: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(this.baseUrl + '/heroes', heroe);
  }

  actualizarHeroe(heroe: Hero): Observable<Hero> {
    if (!heroe.id) throw Error('Se requiere la ID del héroe');
    return this.httpClient.patch<Hero>(
      this.baseUrl + '/heroes' + heroe.id,
      heroe
    );
  }

  borrarHeroe(id: string): Observable<boolean> {
    return this.httpClient.delete<Hero>(this.baseUrl + '/heroes' + id).pipe(
      catchError((error) => of(false)),
      map((resp) => true)
    );
  }
}
