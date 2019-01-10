import { TestBed } from '@angular/core/testing';
import { HotelService } from './hotel.service';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../classes/hotel';
import { Address } from '../../Address/address';
import { Urls } from '../../Urls/Urls';
import { of } from 'rxjs'
import { pipeFromArray } from 'rxjs/internal/util/pipe';


fdescribe('HotelService', () => {
let httpClient: HttpClient;
let hotelService: HotelService;

beforeEach(()=> {
  httpClient = ({get: null, post: null} as unknown) as HttpClient;
  hotelService = new HotelService(httpClient);
});

it('should return new Hotel when creating a hotel', () => {
  let newhotel: Hotel = createFakeHotel();

  spyOn(httpClient, 'post').and.callFake((url: string)=> {
    expect(url).toBe(Urls.urlHotels);
    return of(newhotel);
  });

  hotelService.saveNewHotel(newhotel)
    .subscribe((result: Hotel) => {
      expect(result).toEqual(newhotel);
    })
});

it('should return a list of hotels when getAll hotels', () => {
  let allHotels: Hotel[] = [createFakeHotel()];
  
  spyOn(httpClient, 'get').and.callFake((url: string) => {
    expect(url).toBe(Urls.urlHotels);
    return of(allHotels);    
  });

  hotelService.getHotels()
    .subscribe((result: Hotel []) => {
      expect(result).toEqual(allHotels);
    });
});

it('should return hotel with id 1 when get hotel by id 1', () => {
  let hotelWithId1: Hotel= createFakeHotel();

  spyOn(httpClient, 'get').and.callFake((url: string) => {
    expect(url).toBe(Urls.urlHotels + hotelWithId1.id);
    return of(hotelWithId1);
  });

  hotelService.getHotelById('1')
    .subscribe((result: Hotel) => {
      expect(result).toEqual(hotelWithId1);
    });
});
});

function createFakeHotel(): Hotel{

  let fakeAddress: Address = {
    country:'Test country', 
    city: 'Test city',
    streetName:'Test streetname',
    zipCode:1000,
    streetNumber: 'Test streetnumber'
  }
  let hotel: Hotel ={
    id: '1',
    name: 'Test Name',
    website: 'Test Website',
    contactperson: 'Test Contact Person',
    address: fakeAddress
  }
  return hotel;
}
