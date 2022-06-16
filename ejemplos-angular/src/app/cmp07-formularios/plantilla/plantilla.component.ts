import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuariosService } from 'src/app/cmp09-http/services/usuarios.service';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {
  datosLogin = {
    email: 'angel@gmail.co',
    password: ''
  }

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    console.log(form)
    console.log(this.datosLogin)
    console.log(form.value)
    this.usuariosService.login(form.value)
      .subscribe({
        next: (datos) => {
          console.log(datos)
        }
      })
  }

}
