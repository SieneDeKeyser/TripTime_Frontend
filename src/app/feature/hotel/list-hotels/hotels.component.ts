import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { HotelService } from 'src/app/core/hotels/services/hotel.service';
import { Hotel } from 'src/app/core/hotels/classes/hotel';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),],
})
export class HotelsComponent implements OnInit {

  displayedColumns:string[] = ['name', 'website', 'contactPerson'];
  expandedElement: Hotel | null;
  constructor(private hotelService: HotelService) { }
  
  hotels: Hotel [] = [];

  ngOnInit() {
    this.getAllHotels();
  }

  getAllHotels(): void {
    this.hotelService.getHotels()
        .subscribe(hotels =>{
            this.hotels = hotels;
          });
  }
}
