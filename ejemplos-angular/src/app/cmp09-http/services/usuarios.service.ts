import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/cmp06-servicios/services/auth.service';
import jwtDecode from 'jwt-decode'
import { Credenciales, Token, TokenPayload, Usuario } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarioRegistrado$ = new EventEmitter<void>()
  usuarioLogueado$ = new EventEmitter<string>()

  constructor(private http: HttpClient, private auth: AuthService) { }

  registro(nuevoUsuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:3000/usuarios', nuevoUsuario)
  }

  login(credenciales: Credenciales): Observable<Token> {
    return this.http.post<Token>('http://localhost:3001/login', credenciales)
      .pipe(
        tap((resp: Token) => {
          console.log('tap', resp)
          this.auth.setToken(resp.token)
          const payload: TokenPayload = jwtDecode(resp.token)
          this.usuarioLogueado$.emit(payload.username)
        }),
      )
  }
}
