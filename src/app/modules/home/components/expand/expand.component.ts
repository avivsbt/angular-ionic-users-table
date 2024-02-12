import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.scss'],
})
export class ExpandComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() { }

}
