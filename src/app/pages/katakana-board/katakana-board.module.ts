import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KatakanaBoardPageRoutingModule } from './katakana-board-routing.module';

import { KatakanaBoardPage } from './katakana-board.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KatakanaBoardPageRoutingModule
  ],
  declarations: [KatakanaBoardPage]
})
export class KatakanaBoardPageModule {}
