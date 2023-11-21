import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HiraganaBoardPage } from './hiragana-board.page';

const routes: Routes = [
  {
    path: '',
    component: HiraganaBoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HiraganaBoardPageRoutingModule {}
