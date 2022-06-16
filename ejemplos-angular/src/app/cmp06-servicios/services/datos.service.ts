import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private listaUsuarios: Array<string> = [
    'Ángel Villalba'
  ]

  constructor(private logger: LoggerService) { }

  getUsuarios(): Array<string> {
    return this.listaUsuarios
  }

  addUsuario(usuario: string): void {
    this.listaUsuarios.push(usuario)
    this.logger.warning('Se acaba de añadir el usuario: ' + usuario)
  }
}
