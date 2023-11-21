import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HiraganaBoardPageRoutingModule } from './hiragana-board-routing.module';

import { HiraganaBoardPage } from './hiragana-board.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HiraganaBoardPageRoutingModule
  ],
  declarations: [HiraganaBoardPage]
})
export class HiraganaBoardPageModule {}
