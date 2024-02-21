import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../models/users';
import { NgClass } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  standalone: true,
  imports: [IonicModule, NgClass],
})
export class ItemComponent {

  public user = input<IUser>({} as IUser);
  public selected = input<string>("");

  @Output() selectedItemId = new EventEmitter<string>();

  constructor(private router: Router) { }

  public navigateToEdit(): void {
    this.router.navigate(['/edit', this.user().login.uuid])
  }

  public onSelected(id: string): void {
    this.user().login.uuid === this.selected() ? this.selectedItemId.emit("") : this.selectedItemId.emit(id);
  }

}
