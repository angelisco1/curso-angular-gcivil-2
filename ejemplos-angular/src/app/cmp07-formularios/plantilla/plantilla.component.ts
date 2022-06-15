import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    console.log(form)
    console.log(this.datosLogin)
    console.log(form.value)
  }

}
