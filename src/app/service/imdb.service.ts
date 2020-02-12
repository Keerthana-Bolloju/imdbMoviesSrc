import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imdb } from '../model/imdb';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {
  private _URL_IMDB = "http://starlord.hackerearth.com/movies";

  constructor(private _HTTP:HttpClient) { }

  getAllMovies():Observable<Imdb[]>{
    return this._HTTP.get<Imdb[]>(this._URL_IMDB)
  }
  
}
