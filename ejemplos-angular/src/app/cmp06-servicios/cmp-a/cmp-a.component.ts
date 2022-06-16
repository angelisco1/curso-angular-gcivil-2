import { Component, Input, OnInit } from '@angular/core';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css']
})
export class CmpAComponent implements OnInit {
  usuarios: Array<string> = []

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.usuarios = this.datos.getUsuarios()
  }

  guardar(event: any) {
    this.datos.addUsuario(event.target.value)
    event.target.value = ''
  }

}
