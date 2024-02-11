import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './pages/login/login.page';
import { FrequencyComponent } from 'src/app/shared/components/frequency/frequency.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [LoginPage, FrequencyComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule
  ]
})
export class AuthModule { }
