import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, IonicModule } from '@ionic/angular';
import { FrequencyComponent } from '../../../../shared/components/frequency/frequency.component';
import { FormsModule } from '@angular/forms';
import { FormDirective } from 'src/app/shared/directives/form.directive';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FrequencyComponent,
    FormsModule,
    FormDirective
  ],
})
export class LoginPage {

  public formValue = signal({ userName: "" });

  constructor(
    private toastController: ToastController,
    private router: Router
  ) { }

  public onLogin(): void {
    if (this.formValue().userName === "1") {
      sessionStorage.setItem("IsLoggedIn", "true");
      this.formValue.set({ userName: "" });
      this.router.navigate(['/home']);
      return;
    }
    this.presentToast();
  }

  private async presentToast(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Invalid value',
      duration: 1500,
      icon: 'person-outline',
    });
    await toast.present();
  }

}
