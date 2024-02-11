import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  handleInput(event: Event): void {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    [""].filter((d) => d.toLowerCase().indexOf(query) > -1);
  }

}
