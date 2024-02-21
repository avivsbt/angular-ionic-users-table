import { Component, signal } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { ListComponent } from '../../components/list/list.component';
import { SearchComponent } from '../../../../shared/components/search/search.component';
import { SpeechComponent } from '../../../../shared/components/speech/speech.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    SpeechComponent,
    SearchComponent,
    ListComponent,
  ],
})
export class HomePage {

  public query = signal<string>("");

  constructor(private homeService: HomeService) { }

  ionViewWillEnter(): void {
    this.homeService.loadUsers();
  }

  public onSearch(query: string) {
    this.query.set(query);
  }
}
