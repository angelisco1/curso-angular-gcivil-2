import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meme } from '../models/meme';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MemesService {
  private resource: string = 'memes'
  private URL: string = `${environment.urlMemes}/${this.resource}`


  constructor(private http: HttpClient) { }

  getMemes(): Observable<any> {
    return this.http.get(this.URL)
  }

  getMemeById(id: string): Observable<any> {
    return this.http.get(`${this.URL}/${id}?_expand=usuario`)
  }

  createMeme(nuevoMeme: Meme): Observable<any> {
    return this.http.post(this.URL, nuevoMeme)
  }

  updateMeme(id: string, memeActualizado: Meme): Observable<any> {
    return this.http.put(`${this.URL}/${id}`, memeActualizado)
  }
}
