import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HiraganaPage } from '../pages/hiragana/hiragana.page';
import { HiraganaBoardPage } from '../pages/hiragana-board/hiragana-board.page';
import { KatakanaPage } from '../pages/katakana/katakana.page';
import { KatakanaBoardPage } from '../pages/katakana-board/katakana-board.page';
import { SigninPage } from '../pages/signin/signin.page';
import { SignupPage } from '../pages/signup/signup.page';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate:[AuthGuard]
  },


  //rutas de uso para la app
  {
    path: 'hiragana',
    component: HiraganaPage,
    canActivate:[AuthGuard]
  },
  {
    path:'hiragana-board',
    component:HiraganaBoardPage,
    canActivate:[AuthGuard]
  },
  {
    path: 'katakana',
    component: KatakanaPage,
    canActivate:[AuthGuard]
  },
  {
    path:'katakana-board',
    component:KatakanaBoardPage,
    canActivate:[AuthGuard]
  },
  {
    path:'signin',
    component:SigninPage,
  },
  {
    path:'signup',
    component:SignupPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
