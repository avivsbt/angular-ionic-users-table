import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { IUser } from '../../models/users';
import { Subscription } from 'rxjs';
import { ExpandComponent } from '../expand/expand.component';
import { ItemComponent } from '../item/item.component';
import { NgFor, NgIf } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgFor,
        ItemComponent,
        NgIf,
        ExpandComponent,
    ],
})
export class ListComponent implements OnInit, OnDestroy {

  @Input() query: string = "";
  private usersSubscription: Subscription = Subscription.EMPTY;
  public users: IUser[] | null = null;
  public selected: string = "";

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.usersSubscription = this.homeService.getAllUsers().subscribe(res => {
      this.users = [...res.values()];
    });
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

  public onSelected(id: string): void {
    this.selected = id;
  }

  public onFilerUsers(): IUser[] | null {
    return this.users?.filter((user) => user.name.first.toLowerCase().indexOf(this.query) > -1) || null;
  }

}
