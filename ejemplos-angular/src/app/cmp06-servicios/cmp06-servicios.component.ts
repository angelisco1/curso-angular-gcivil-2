import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-cmp06-servicios',
  templateUrl: './cmp06-servicios.component.html',
  styleUrls: ['./cmp06-servicios.component.css']
})
export class Cmp06ServiciosComponent implements OnInit {

  constructor(
    private logger: LoggerService,
    private auth: AuthService,
    @Inject('Ajustes') private ajustes: any) { }

  ngOnInit(): void {
    console.log(this.ajustes)
  }

  mostrarError(input: HTMLInputElement) {
    this.logger.error(input.value)
  }

  mostrarWarning(input: HTMLInputElement) {
    this.logger.warning(input.value)
  }

  login() {
    const token = Math.random() + ''
    this.auth.setToken(token)
  }

  logout() {
    this.auth.delToken()
  }

}
