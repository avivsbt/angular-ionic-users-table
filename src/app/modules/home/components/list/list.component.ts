import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { IUser } from '../../models/users';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {

  private usersSubscription: Subscription = Subscription.EMPTY;
  public users: IUser[] = [];
  public selected: string = "";

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.usersSubscription = this.homeService.users$.subscribe(res => {
      this.users = [...res.values()];
    });
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

  public onSelected(id: string): void {
    this.selected = id;
  }

}
