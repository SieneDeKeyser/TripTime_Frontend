import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/authentication/services/admin.service';
import { Admin } from 'src/app/core/authentication/classes/admin';
import { User } from 'src/app/core/authentication/classes/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

admin: Admin = new Admin();

  submitted = false;
  createNewAdminForm: FormGroup;

  constructor(private adminService: AdminService,
    private formbuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.admin.loginDTO = new User();
    this.createNewAdminForm = this.formbuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        loginDTO: this.formbuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required]
      })
    });
  }

  saveNewAdmin(): void {
    this.adminService.saveNewAdmin(this.createNewAdminForm.value)
      .subscribe(data => {
        console.log(data);
      });
  }

  cancel() {
    this.router.navigateByUrl('/login');
  }

  get formValues() {
    return this.createNewAdminForm.controls;
  }

  isValid(): boolean {
    this.submitted = true;
    if (this.createNewAdminForm.invalid) {
      return false;
    }
    return true;
  }
}
