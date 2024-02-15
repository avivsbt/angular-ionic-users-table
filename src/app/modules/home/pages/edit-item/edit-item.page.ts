import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from '../../models/users';
import { HomeService } from '../../services/home.service';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-edit-item',
    templateUrl: './edit-item.page.html',
    styleUrls: ['./edit-item.page.scss'],
    standalone: true,
    imports: [
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class EditItemPage implements OnInit, OnDestroy {

  public formData: FormGroup;
  public user: IUser = {} as IUser;
  private id: string = "";
  private routeSub: Subscription = Subscription.EMPTY;
  private userSubscription: Subscription = Subscription.EMPTY;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private homeService: HomeService
  ) {
    this.homeService.loadUsers();
    this.formData = this.fb.group({
      firstName: [''],
      lastName: [''],
      age: [''],
      phone: [''],
      gender: [''],
      email: ['']
    });
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    if (this.id) {
      this.userSubscription = this.homeService.getUser(this.id).subscribe(user => {
        this.user = user;

        this.formData.setValue({
          firstName: user.name.first,
          lastName: user.name.last,
          age: user.registered.age,
          phone: user.phone,
          gender: user.gender,
          email: user.email
        });

      });
    }
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  public onSubmit(): void {
    this.user.name.first = this.formData.controls['firstName'].value;
    this.user.name.last = this.formData.controls['lastName'].value;
    this.user.registered.age = this.formData.controls['age'].value;
    this.user.phone = this.formData.controls['phone'].value;
    this.user.gender = this.formData.controls['gender'].value;
    this.user.email = this.formData.controls['email'].value;

    this.homeService.setUser(this.id, this.user);
    this.router.navigate(['/home']);
  }

}
