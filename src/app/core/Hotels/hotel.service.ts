import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from './hotel';
import { HttpClient } from '@angular/common/http';
import { Urls } from '../Urls/Urls';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  getHotels(): Observable<Hotel []>{
    return this.http.get<Hotel []>(Urls.urlHotels);
  }
}
