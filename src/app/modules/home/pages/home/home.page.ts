import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public query: string = "";

  constructor(private homeService: HomeService) { }

  ionViewWillEnter(): void {
    this.homeService.loadUsers();
  }

  public onSearch(query: string) {
    this.query = query;
  }
}
