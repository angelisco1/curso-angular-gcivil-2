import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarioRegistrado$ = new EventEmitter<void>()

  constructor(private http: HttpClient) { }

  registro(nuevoUsuario: any): Observable<any> {
    return this.http.post('http://localhost:3000/usuarios', nuevoUsuario)
  }

  login(credenciales: any): Observable<any> {
    return this.http.post('http://localhost:3001/login', credenciales)
  }
}
