import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private authService: AuthService, private router: Router) { 
    if(this.authService.isAuthenticated()){
      this.router.navigate(['/home']);
    }
  }

}
