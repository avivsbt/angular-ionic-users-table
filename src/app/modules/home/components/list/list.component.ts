import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent  implements OnInit {

  public records:any = [
    {id: "1", name: "aviv", company: "test", gender:"meal"},
    {id: "2", name: "aviv", company: "test", gender:"meal"},
    {id: "3", name: "aviv", company: "test", gender:"meal"},
    {id: "4", name: "aviv", company: "test", gender:"meal"},
  ]
  constructor() { }

  ngOnInit() {}

}
