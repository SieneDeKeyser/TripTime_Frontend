import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hotel } from '../classes/hotel';
import { Urls } from '../../usedUrls/urls';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})

export class HotelService {

  constructor(private http: HttpClient) { }

  getHotels(): Observable<Hotel []>{
    return this.http.get<Hotel []>(Urls.urlHotels);
  }

  saveNewHotel(newHotel:Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(Urls.urlHotels, newHotel, httpOptions);
  }

  getHotelById(id: string): Observable<Hotel>{
    return this.http.get<Hotel>(Urls.urlHotels + id, httpOptions);
  }
}
