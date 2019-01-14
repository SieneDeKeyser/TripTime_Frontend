import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of, BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticatedUser } from '../classes/authenticatedUser';
import { Urls } from '../../usedUrls/urls';
import { User } from '../classes/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private jwtHelper: JwtHelperService

  constructor(private httpClient: HttpClient) { 
    this.jwtHelper = new JwtHelperService();
  }

  public isAuthenticated(): boolean {
    const token= localStorage.getItem('tokenInfo') || localStorage.getItem('token');
    if(token)
    {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  };

  login(user: User){
    return this.httpClient.post<any>(`${Urls.urlAuthentication}authenticate`, user)
      .pipe(map(returnToken => {
        if (returnToken){
          localStorage.setItem('token', returnToken['token']);
        }
        return returnToken;
      }));
  }

  getCurrentUser(): Observable<AuthenticatedUser>{
    return this.httpClient.get<AuthenticatedUser>(`${Urls.urlAuthentication}current`);
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('tokenInfo');
  }

}
