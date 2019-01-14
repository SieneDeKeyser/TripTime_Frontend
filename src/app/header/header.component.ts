import { Component, OnInit } from '@angular/core';
import { AuthenticatedUser } from '../core/authentication/classes/authenticatedUser';
import { AuthenticationService } from '../core/authentication/services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: AuthenticatedUser | null;
  isLoggedIn: boolean;

  constructor(private authenticationService: AuthenticationService) {
       }

  ngOnInit() {
    this.getCurrentUser();

  }


  getCurrentUser(){
      return this.authenticationService.getCurrentUser().subscribe(
        data =>{ 
          this.currentUser = data;
        }
      );
    
    
  }

}
