import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './pages/home/home.page';

import { HomeRoutingModule } from './home-routing.module';
import { EditItemPage } from './pages/edit-item/edit-item.page';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { SpeechComponent } from 'src/app/shared/components/speech/speech.component';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { ExpandComponent } from './components/expand/expand.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomePage,
    EditItemPage,
    SearchComponent,
    SpeechComponent,
    ListComponent,
    ItemComponent,
    ExpandComponent
  ]
})
export class HomeModule { }
