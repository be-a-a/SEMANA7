import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarMascotasPage } from './registrar-mascotas.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarMascotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarMascotasPageRoutingModule {}
