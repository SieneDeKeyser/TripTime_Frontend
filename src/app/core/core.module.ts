import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelService } from './hotels/services/hotel.service';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AuthenticationService } from './authentication/services/authentication.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [
    MatListModule, 
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers:[HotelService, AuthenticationService, ]
})
export class CoreModule { }
