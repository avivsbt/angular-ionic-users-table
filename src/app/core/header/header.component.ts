import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  public navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  public onLogOut(): void {
    this.authService.onLogOut();
  }

}
