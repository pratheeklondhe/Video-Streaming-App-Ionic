import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndividualGenrePage } from './individual-genre.page';

const routes: Routes = [
  {
    path: '',
    component: IndividualGenrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndividualGenrePageRoutingModule {}
