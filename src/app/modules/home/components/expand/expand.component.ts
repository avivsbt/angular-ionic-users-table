import { Component, input } from '@angular/core';
import { IUser } from '../../models/users';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class ExpandComponent {

  public user = input<IUser>({} as IUser);

  constructor() { }

}
