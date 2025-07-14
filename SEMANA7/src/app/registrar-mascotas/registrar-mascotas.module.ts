import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarMascotasPageRoutingModule } from './registrar-mascotas-routing.module';

import { RegistrarMascotasPage } from './registrar-mascotas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarMascotasPageRoutingModule
  ],
  declarations: [RegistrarMascotasPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegistrarMascotasPageModule {}
