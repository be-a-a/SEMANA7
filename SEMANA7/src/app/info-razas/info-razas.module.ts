import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoRazasPageRoutingModule } from './info-razas-routing.module';

import { InfoRazasPage } from './info-razas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoRazasPageRoutingModule
  ],
  declarations: [InfoRazasPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InfoRazasPageModule {}
