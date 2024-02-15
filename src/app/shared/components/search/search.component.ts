import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    standalone: true,
    imports: [IonicModule],
})
export class SearchComponent {

  @Output() search = new EventEmitter<string>();
  @Input() searchValue: string =  "";

  constructor() { }

  handleInput(event: Event): void {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.search.emit(query);
  }

}
