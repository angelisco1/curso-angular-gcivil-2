import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  titulo: string = ''
  abierto: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  abrirModal() {
    this.abierto = true
  }

  cerrarModal() {
    this.abierto = false
  }

}
