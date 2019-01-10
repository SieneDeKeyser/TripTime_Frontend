import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { AppRoutingModule } from '../app-routing.module';
import { HotelsComponent } from './hotel/list-hotels/hotels.component';
import { CreateHotelComponent } from './hotel/create-hotel/create-hotel.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [HotelsComponent, CreateHotelComponent, LoginComponent, AdminComponent],
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule
  ]
})
export class FeatureModule { }
