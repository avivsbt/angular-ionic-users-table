import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit, OnDestroy {

  public formData: FormGroup;
  private id: string = "";
  private routeSub: Subscription = Subscription.EMPTY;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.formData = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params["id"];
      console.log(this.id);
      
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
