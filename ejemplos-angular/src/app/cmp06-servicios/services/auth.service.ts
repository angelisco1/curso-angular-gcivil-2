import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  KEY: string = 'authToken'

  constructor() { }

  setToken(token: string) {
    localStorage.setItem(this.KEY, token)
  }

  delToken() {
    localStorage.removeItem(this.KEY)
  }

  getToken(): string | null {
    return localStorage.getItem(this.KEY)
  }
}
