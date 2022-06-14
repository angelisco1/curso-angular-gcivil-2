import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// Debería de ir en un archivo aparte (types.ts)
export type DatosCV = {
  nombre: string,
  apellido: string,
  email: string
}

export type EventDatosCambiados = { name: string, value: string }

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.css']
})
export class CvFormComponent implements OnInit {

  @Input() datosCV: DatosCV | null = null
  @Output() datosCambiados = new EventEmitter<EventDatosCambiados>();

  constructor() { }

  ngOnInit(): void {
  }

  emitirCambio(event: any) {
    this.datosCambiados.emit({
      name: event.target.name,
      value: event.target.value
    })
  }

}
