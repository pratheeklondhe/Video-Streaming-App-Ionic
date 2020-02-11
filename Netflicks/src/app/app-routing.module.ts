import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'login',
    pathMatch: 'full',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    // loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'genre/:id',
    loadChildren: () => import('./individual-genre/individual-genre.module').then( m => m.IndividualGenrePageModule)
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
