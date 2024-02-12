import { Component, Input } from '@angular/core';
import { IUser } from '../../models/users';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.scss'],
})
export class ExpandComponent {

  @Input() item: IUser = {} as IUser;

  constructor() { }

}
