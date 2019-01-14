import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsComponent } from './feature/hotel/list-hotels/hotels.component';
import { CreateHotelComponent } from './feature/hotel/create-hotel/create-hotel.component';
import { LoginComponent } from './feature/login/login.component';
import { AdminComponent } from './feature/admin/admin.component';
import { AuthGuard } from './core/authentication/helpers/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch:'full'},
  {path: 'hotels', component: HotelsComponent, canActivate: [AuthGuard]},
  {path: 'hotelCreation', component: CreateHotelComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'admins', component: AdminComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
