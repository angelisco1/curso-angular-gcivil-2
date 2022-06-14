import { Component, Input, OnInit } from '@angular/core';
import { DatosCV } from '../cv-form/cv-form.component';

@Component({
  selector: 'app-cv-preview',
  templateUrl: './cv-preview.component.html',
  styleUrls: ['./cv-preview.component.css']
})
export class CvPreviewComponent implements OnInit {
  @Input() datosCV: DatosCV | null = null

  constructor() { }

  ngOnInit(): void {
  }

}
