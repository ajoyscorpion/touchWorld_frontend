import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly validUsername = 'touchworld';
  private readonly validPassword = 'touchworldTech';
  private isAuthenticated = false

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    this.isAuthenticated = username === this.validUsername && password === this.validPassword;
    if (this.isAuthenticated) {
      localStorage.setItem('username', username);
    }
    return this.isAuthenticated;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout() {
    localStorage.removeItem('username'); 
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

}
