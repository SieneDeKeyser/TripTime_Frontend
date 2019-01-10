import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/Authentication/Services/authentication.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from 'src/app/core/authentication/classes/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted= false; 
  userForm: FormGroup;
  user: User = new User();
  
  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get formValues(){
    return this.userForm.controls;
  }

  isValid():boolean {
    this.submitted = true;
    if(this.userForm.invalid)
    {
      return false;
    }
    return true;
  }

  login():void {
    this.authenticationService.login(this.userForm.value)
        .pipe(first())
        .subscribe(data => {
          console.log(data);
        });
  }

}
