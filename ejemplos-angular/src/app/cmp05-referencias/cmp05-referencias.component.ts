import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-cmp05-referencias',
  templateUrl: './cmp05-referencias.component.html',
  styleUrls: ['./cmp05-referencias.component.css']
})
export class Cmp05ReferenciasComponent implements OnInit {
  @ViewChild(ModalComponent) modal: ModalComponent | null = null
  @ViewChild('modal2') modal2: ModalComponent | null = null

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit: ', this.modal)
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: ', this.modal)
  }

  play(video: HTMLVideoElement) {
    console.dir(video)
    video.play()
  }

  pause(video: HTMLVideoElement) {
    video.pause()
  }

  setFullscreen(video: HTMLVideoElement) {
    video.requestFullscreen()
  }

  cambiarVolumen(video: HTMLVideoElement, event: any) {
    video.volume = Number(event.target.value) / 100
  }

  muestraVideo() {
    this.modal?.abrirModal()
    this.modal2?.abrirModal()
  }
}
