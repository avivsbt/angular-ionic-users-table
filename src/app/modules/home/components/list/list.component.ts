import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { IUser } from '../../models/users';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {

  @Input() query: string = "";
  private usersSubscription: Subscription = Subscription.EMPTY;
  public users: IUser[] = [];
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

  public onFilerUsers(): IUser[] {
    return this.users.filter((user) => user.email.toLowerCase().indexOf(this.query) > -1);
  }

}
