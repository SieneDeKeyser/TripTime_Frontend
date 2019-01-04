import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { AppRoutingModule } from '../app-routing.module';
import { HotelsComponent } from './hotel/hotels.component';

@NgModule({
  declarations: [HotelsComponent],
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule
  ]
})
export class FeatureModule { }
