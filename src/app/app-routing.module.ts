import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsComponent } from './feature/hotel/list-hotels/hotels.component';
import { CreateHotelComponent } from './feature/hotel/create-hotel/create-hotel.component';
import { LoginComponent } from './feature/login/login.component';
import { AdminComponent } from './feature/admin/admin.component';

const routes: Routes = [
  {path: 'hotels', component: HotelsComponent},
  {path: 'hotelCreation', component: CreateHotelComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admins', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
