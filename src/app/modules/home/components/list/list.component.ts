import { Component, OnInit, OnDestroy, signal, computed, input } from '@angular/core';
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

  public query = input<string>("");
  public users = signal<null | IUser[]>(null);
  public selected = signal<string>("");

  public filteredUsers = computed(() =>
    this.users()?.filter((user) => user.name.first.toLowerCase().indexOf(this.query()) > -1) || null
  );

  public hasUsers = computed(() => this.filteredUsers()?.length);

  private usersSubscription: Subscription = Subscription.EMPTY;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.usersSubscription = this.homeService.getAllUsers().subscribe(res => {
      this.users.set([...res.values()]);
    });
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

}
