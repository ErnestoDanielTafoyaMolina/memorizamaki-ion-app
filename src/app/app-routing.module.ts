import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'hiragana',
    loadChildren: () => import('./pages/hiragana/hiragana.module').then( m => m.HiraganaPageModule)
  },
  {
    path: 'hiragana-board',
    loadChildren: () => import('./pages/hiragana-board/hiragana-board.module').then( m => m.HiraganaBoardPageModule)
  },
  {
    path: 'katakana-board',
    loadChildren: () => import('./pages/katakana-board/katakana-board.module').then( m => m.KatakanaBoardPageModule)
  },
  {
    path: 'katakana',
    loadChildren: () => import('./pages/katakana/katakana.module').then( m => m.KatakanaPageModule)
  },
  {
    path: 'user-info',
    loadChildren: () => import('./pages/user-info/user-info.module').then( m => m.UserInfoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
