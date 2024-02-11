import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {

  public records: any = [
    { id: "1", name: "aviv", company: "test", gender: "meal" },
    { id: "2", name: "aviv", company: "test", gender: "meal" },
    { id: "3", name: "aviv", company: "test", gender: "meal" },
    { id: "4", name: "aviv", company: "test", gender: "meal" },
  ];

  public selected: string = "";

  constructor() { }

  public onSelected(id: string): void {    
    this.selected = id;
  }

}
