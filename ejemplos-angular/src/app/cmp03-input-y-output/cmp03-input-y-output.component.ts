import { Component, OnInit } from '@angular/core';
import { DatosCV, EventDatosCambiados } from './cv-form/cv-form.component';

@Component({
  selector: 'app-cmp03-input-y-output',
  templateUrl: './cmp03-input-y-output.component.html',
  styleUrls: ['./cmp03-input-y-output.component.css']
})
export class Cmp03InputYOutputComponent implements OnInit {

  sugusFresa = {
    color: 'red',
    sabor: 'fresa'
  }

  datosCV: DatosCV = {
    nombre: 'Ángel',
    apellido: 'Villalba',
    email: 'angel@gmail.com'
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarDatosCV(event: EventDatosCambiados) {
    // this.datosCV[event.name] = event.value
    switch (event.name) {
      case 'nombre':
        this.datosCV.nombre = event.value
        break;
      case 'apellido':
        this.datosCV.apellido = event.value
        break;
      case 'email':
        this.datosCV.email = event.value
        break;
    }
  }

}
