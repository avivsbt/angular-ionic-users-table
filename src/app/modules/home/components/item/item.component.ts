import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {

  @Input() item: any;
  @Input() selected: string = "";
  @Output() selectedItemId = new EventEmitter<string>();

  constructor(private router: Router) { }

  public navigateToEdit(): void {
    this.router.navigate(['/edit', this.item.login.uuid])
  }

  public onSelected(id: string): void {
    if(this.item.login.uuid === this.selected) {
      this.selectedItemId.emit("");
      return;
    }
    
    this.selectedItemId.emit(id);
  }

}
