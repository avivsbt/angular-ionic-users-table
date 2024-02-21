import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from '../../models/users';
import { HomeService } from '../../services/home.service';
import { FormDirective } from 'src/app/shared/directives/form.directive';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    FormDirective,
    IonicModule
  ],
})
export class EditItemPage implements OnInit, OnDestroy {

  public formValue = signal<IUser>({
    name: {
      first: "",
      last: ""
    },
    email: "",
    phone: "",
    gender: "",
    registered: {
      age: 0
    }
  } as IUser);

  private id = signal<string>("");
  private routeSub: Subscription = Subscription.EMPTY;
  private userSubscription: Subscription = Subscription.EMPTY;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private homeService: HomeService
  ) {
    this.homeService.loadUsers();
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => this.id.set(params["id"]));
    this.userSubscription = this.homeService.getUser(this.id()).subscribe(user => this.formValue.set(user));
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  onSubmit(): void {
    this.homeService.setUser(this.id(), this.formValue());
    this.router.navigate(['/home']);
  }
}
