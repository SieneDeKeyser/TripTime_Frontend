import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Urls } from '../../usedUrls/urls';
import { AuthenticatedUser } from '../classes/authenticatedUser';
import { Admin } from '../classes/admin';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  saveNewAdmin(newAdmin: Admin): Observable<AuthenticatedUser>{
    return this.httpClient.post<AuthenticatedUser>(Urls.urlAdmin, {userDTO: newAdmin }, httpOptions);
  }
}
