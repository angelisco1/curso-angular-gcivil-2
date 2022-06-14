import { Component, OnInit } from '@angular/core';

// type Tarea = { texto: string, completada: boolean }
// interface Tarea { texto: string, completada: boolean }
class Tarea {
  // titulo: string
  // completada: boolean

  // constructor(titulo: string, completada: boolean) {
  //   this.titulo = titulo
  //   this.completada = completada
  // }
  constructor(public titulo: string, public completada: boolean) {
  }
}

type Color = { texto: string, value: string }


@Component({
  selector: 'app-cmp02-directivas',
  templateUrl: './cmp02-directivas.component.html',
  styleUrls: ['./cmp02-directivas.component.css']
})
export class Cmp02DirectivasComponent implements OnInit {
  colorLetra: string = 'yellow'
  colorFondo: string = 'black'

  colores: Array<Color> = [
    { texto: 'azul', value: 'blue' },
    { texto: 'verde', value: 'green' },
    { texto: 'negro', value: 'black' },
  ]
  // tarea: Tarea = {
  //   texto: 'Tarea 1',
  //   completada: false
  // }
  tarea: Tarea = new Tarea('Tarea 1', false)
  darkMode: boolean = true
  // listaDatos: (string | number)[] = [
  listaDatos: Array<string> = [
    'Dato 1',
    'Dato 2',
    'Dato 3',
    'Dato 4'
  ]



  constructor() { }

  ngOnInit(): void {
  }

  completarTarea() {
    this.tarea.completada = !this.tarea.completada
  }

  cambiarTema(activado: boolean): void {
    this.darkMode = activado
  }

}
