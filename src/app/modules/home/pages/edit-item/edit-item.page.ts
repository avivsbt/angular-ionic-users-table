import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {

  public formData: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }

  ngOnInit() { }

}
