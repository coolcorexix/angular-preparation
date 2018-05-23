import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import Hero from './hero';
import {MessageService} from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';//URL to web API
  getHeroes(): Observable<Hero[]>{
    this.messageService.add("fetched heroes");
    return this.http.get<Hero[]>(this.heroesUrl).pipe(tap(heroes=>console.log("heroes fetched!!")),catchError(this.handleError('getHeroes', [])));
  }
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> =>{
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);

    }
  }
  const httpOptions={
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  /**POST: add a new hero to server **/
  addHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(tap((hero:Hero)=>console.log(`${hero}`)),
            catchError(this.handleError<Hero>('create hero')));

  }
  //DELETE: delete from server
  deleteHero(hero: Hero|number): Observable<Hero>{
    const id= typeof hero === 'number'? hero: hero.id;
    const deleteUrl=`${this.heroesUrl}/?id=${id}`;
    return this.http.delete<Hero>(deleteUrl, this.httpOptions).pipe(tap(_=>console.log("deleted")), catchError(this.handleError<Hero>("Delete hero")));

  }
  /* GET heroes whose name contains search term */
searchHeroes(term: string): Observable<Hero[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
    tap(_ => console.log(`found heroes matching "${term}"`)),
    catchError(this.handleError<Hero[]>('searchHeroes', []))
  );
}

  updateHero(hero: Hero): Observable<any>{
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(tap(_=>console.log(`updated hero id ${hero.id}`)),
                      catchError(this.handleError<Hero>(`update hero id ${hero.id}`)));




  }
  getHero(id: number): Observable<Hero>{
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero>(url).pipe(tap(_=>console.log(`Done`)),catchError(this.handleError<Hero>('getHeroById')));


  }
  constructor(private http:HttpClient, private messageService: MessageService) { }
}
