import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    return JSON.parse(sessionStorage.getItem('IsLoggedIn') ?? "false");
  }

  public onLogOut(): void {
    sessionStorage.removeItem('IsLoggedIn');
    localStorage.removeItem("users");
    window.location.reload();
  }

}
