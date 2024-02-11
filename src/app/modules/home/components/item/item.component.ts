import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent  implements OnInit {

  @Input() item: any;

  constructor(private router: Router){}


  ngOnInit() {}

  navigateToEdit(){
    this.router.navigate(['/edit', this.item.id])
  }

}
