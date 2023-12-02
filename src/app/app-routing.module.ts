import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'hiragana/:level',
    loadChildren: () => import('./pages/hiragana/hiragana.module').then( m => m.HiraganaPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'hiragana-board',
    loadChildren: () => import('./pages/hiragana-board/hiragana-board.module').then( m => m.HiraganaBoardPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'katakana-board',
    loadChildren: () => import('./pages/katakana-board/katakana-board.module').then( m => m.KatakanaBoardPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'katakana/:level',
    loadChildren: () => import('./pages/katakana/katakana.module').then( m => m.KatakanaPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'user-info',
    loadChildren: () => import('./pages/user-info/user-info.module').then( m => m.UserInfoPageModule),
    canActivate:[AuthGuard]
  },
  { path:'**',
   redirectTo:'signin', pathMatch:'full' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
