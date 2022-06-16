import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { passwordMasSegura, tieneMayusculas } from '../validations/mayus.validator';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('peter@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('1234', [Validators.required, Validators.minLength(4), passwordMasSegura(true, true)]),
    })
  }

  ngOnInit(): void {
  }

  // get mostrarErroresNombre(): boolean | undefined {
  //   return this.form.get('nombre')?.invalid && this.form.get('nombre')?.dirty
  // }
  getMostrarErrores(campo: string): boolean | undefined {
    return this.form.get(campo)?.invalid && this.form.get(campo)?.dirty
  }

  getErrores(campo: string): ValidationErrors | null | undefined {
    return this.form.get(campo)?.errors
  }

  registro() {
    console.log(this.form)
    console.log(this.form.value)
  }

}
