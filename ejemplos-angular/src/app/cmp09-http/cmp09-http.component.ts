import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-cmp09-http',
  templateUrl: './cmp09-http.component.html',
  styleUrls: ['./cmp09-http.component.css']
})
export class Cmp09HttpComponent implements OnInit {
  mostrarRegistro: boolean = false
  mostrarLogin: boolean = true

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.usuarioRegistrado$.subscribe({
      next: () => {
        this.mostrarRegistro = false
        this.mostrarLogin = true
      }
    })
  }



}
