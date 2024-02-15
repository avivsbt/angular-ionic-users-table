import { Component } from '@angular/core';
import { AuthService } from './modules/auth/services/auth.service';
import { NgIf } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, NgIf, HeaderComponent, FooterComponent],
  
})
export class AppComponent {
  constructor(private authService: AuthService) { }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
