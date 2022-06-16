import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-errores',
  templateUrl: './errores.component.html',
  styleUrls: ['./errores.component.css']
})
export class ErroresComponent implements OnInit {
  @Input() errores: ValidationErrors | null | undefined = null
  listaMensajes: Array<string> = []

  constructor() { }

  ngOnInit(): void {
    if (this.errores) {

      Object.entries(this.errores).forEach((entry) => {
        const [error, valor] = entry
        console.log(error, valor)
        switch (error) {
          case 'required':
            this.listaMensajes.push('El campo es obligatorio')
            break

          case 'punto':
            this.listaMensajes.push('El valor tiene que llevar al menos un punto (.)')
            break

          case 'tieneMayusculas':
            this.listaMensajes.push('El valor tiene que llevar al menos una letra en mayúscula')
            break

          case 'email':
            this.listaMensajes.push('El email no tiene un formato valido')
            break

          case 'minlength':
            const { actualLength, requiredLength } = valor
            this.listaMensajes.push(`El campo tiene que tener ${requiredLength} (${actualLength}/${requiredLength})`)
            break
        }
      })
    }
  }

}
