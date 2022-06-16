import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent implements OnInit, OnDestroy {
  listaNums: Array<number> = []
  subscription: Subscription | null = null

  constructor() { }

  ngOnInit(): void {
    this.subscription = interval(1000)
      .subscribe((num) => {
        console.log(num)
        this.listaNums.push(num)
      })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
