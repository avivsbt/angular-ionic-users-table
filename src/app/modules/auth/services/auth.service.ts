import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    const IsLoggedIn: boolean = JSON.parse(sessionStorage.getItem('IsLoggedIn') ?? "false");
    return IsLoggedIn
  }

  public onLogOut(): void {
    sessionStorage.setItem('IsLoggedIn', 'false');
  }

}
