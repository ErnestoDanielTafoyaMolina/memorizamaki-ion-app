import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KatakanaBoardPage } from './katakana-board.page';

const routes: Routes = [
  {
    path: '',
    component: KatakanaBoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KatakanaBoardPageRoutingModule {}
