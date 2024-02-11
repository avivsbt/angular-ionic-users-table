import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent  implements OnInit {

  public records:any = [
    {name: "aviv", company: "test", gender:"meal"},
    {name: "aviv", company: "test", gender:"meal"},
    {name: "aviv", company: "test", gender:"meal"},
    {name: "aviv", company: "test", gender:"meal"},
  ]
  constructor() { }

  ngOnInit() {}

}
