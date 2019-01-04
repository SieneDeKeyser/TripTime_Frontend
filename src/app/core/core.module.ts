import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelService } from './Hotels/hotel.service';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
  ],
  exports: [
    MatListModule, 
    MatTableModule,
    MatButtonModule,
  ],
  providers:[HotelService]
})
export class CoreModule { }
