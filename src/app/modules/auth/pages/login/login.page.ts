import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput, ToastController, IonicModule } from '@ionic/angular';
import { FrequencyComponent } from '../../../../shared/components/frequency/frequency.component';
@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    standalone: true,
    imports: [IonicModule, FrequencyComponent],
})
export class LoginPage {

  @ViewChild('input') input: IonInput = {} as IonInput;

  constructor(
    private toastController: ToastController,
    private router: Router
  ) { }

  public onLogin(): void {
    if (this.input.value === "1") {
      sessionStorage.setItem("IsLoggedIn", "true");
      this.input.value = "";
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
