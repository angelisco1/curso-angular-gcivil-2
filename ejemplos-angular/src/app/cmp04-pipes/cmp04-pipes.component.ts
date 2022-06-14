import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp04-pipes',
  templateUrl: './cmp04-pipes.component.html',
  styleUrls: ['./cmp04-pipes.component.css']
})
export class Cmp04PipesComponent implements OnInit {

  producto = {
    nombre: 'one plus 9',
    precio: 750,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam libero rem possimus, fugit ullam nulla aut error laborum fugiat voluptas nam nihil blanditiis aspernatur unde velit, ut, perspiciatis rerum numquam!',
    fechaLanzamiento: new Date()
  }

  promiseUsers: Promise<any> | null = null
  usuarios = []

  constructor() { }

  ngOnInit(): void {
    this.promiseUsers = fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
    // .then(usuarios => this.usuarios = usuarios)
  }

}
