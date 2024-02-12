import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {

  @Output() search = new EventEmitter<string>();

  constructor() { }

  handleInput(event: Event): void {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.search.emit(query);
  }

}
