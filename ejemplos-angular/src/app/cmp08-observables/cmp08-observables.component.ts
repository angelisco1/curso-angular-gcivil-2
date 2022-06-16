import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-cmp08-observables',
  templateUrl: './cmp08-observables.component.html',
  styleUrls: ['./cmp08-observables.component.css']
})
export class Cmp08ObservablesComponent implements OnInit {
  mostrar: boolean = true

  constructor() { }

  ngOnInit(): void {
    const observable = this.crearObservable()

    // observable.subscribe(
    //   () => { },
    //   (err) => console.log(err),
    //   () => { }
    // )

    const subscription: Subscription = observable.subscribe({
      next: (msg: string) => console.log(msg),
      error: (err) => console.log(err),
      complete: () => console.log('Se ha terminado...')
    })

    setTimeout(() => {
      subscription.unsubscribe()
    }, 2500)
  }

  toggleMostrar() {
    this.mostrar = !this.mostrar
  }

  crearObservable() {
    return new Observable((subscriber: Subscriber<string>) => {
      subscriber.next('Mensaje 1')
      setTimeout(() => {
        subscriber.next('Mensaje 2')
      }, 2000)
      setTimeout(() => {
        // subscriber.error('Hay un error con tu suscripción')
        subscriber.complete()
      }, 4000)
      setTimeout(() => {
        subscriber.next('Mensaje 3')
      }, 5000)
    })
  }
}
