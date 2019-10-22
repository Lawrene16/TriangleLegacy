import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServicesdetailsPage } from './servicesdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ServicesdetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServicesdetailsPage]
})
export class ServicesdetailsPageModule {}
