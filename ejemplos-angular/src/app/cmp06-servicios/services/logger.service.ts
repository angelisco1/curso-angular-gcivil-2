import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // singleton
})
export class LoggerService {

  constructor() { }

  error(msg: string): void {
    console.error(`${new Date().toLocaleString()} [ERROR] ${msg}`)
  }

  warning(msg: string): void {
    console.warn(`${new Date().toLocaleString()} [WARNING] ${msg}`)
  }
}
