import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './route-guard/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'genre/:id',
    loadChildren: () => import('./individual-genre/individual-genre.module').then( m => m.IndividualGenrePageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes
      // , { preloadingStrategy: PreloadAllModules }
      )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
