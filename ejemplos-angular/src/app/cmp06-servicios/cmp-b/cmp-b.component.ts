import { Component, OnInit } from '@angular/core';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css']
})
export class CmpBComponent implements OnInit {
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
