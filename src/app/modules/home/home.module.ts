import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './pages/home/home.page';

import { HomeRoutingModule } from './home-routing.module';
import { EditItemPage } from './pages/edit-item/edit-item.page';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { SpeechComponent } from 'src/app/shared/components/speech/speech.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
  ],
  declarations: [HomePage, EditItemPage, SearchComponent, SpeechComponent]
})
export class HomeModule { }
