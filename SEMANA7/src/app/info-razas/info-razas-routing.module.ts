import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoRazasPage } from './info-razas.page';

const routes: Routes = [
  {
    path: '',
    component: InfoRazasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRazasPageRoutingModule {}
