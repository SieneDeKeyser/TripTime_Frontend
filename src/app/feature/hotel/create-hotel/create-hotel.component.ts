import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/core/address/address';
import { HotelService } from 'src/app/core/hotels/services/hotel.service';
import { Hotel } from 'src/app/core/hotels/classes/hotel';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {

  hotel: Hotel = new Hotel();
  submitted = false;
  createNewHotelForm: FormGroup;
  constructor(private hotelService: HotelService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.hotel.address = new Address();
    this.createNewHotelForm = this.formBuilder.group({
      name: ['', Validators.required],
      website: ['',Validators.required],
      contactPerson: ['', Validators.required],
      address: this.formBuilder.group({
        zipCode: ['', Validators.required],
        city: ['', Validators.required],
        country:['', Validators.required],
        streetName: ['', Validators.required],
        streetNumber: ['', Validators.required]
      })
    });
  }

  saveNewHotel(): void{
    this.hotelService.saveNewHotel(this.createNewHotelForm.value)
                    .subscribe(data => {
                      this.router.navigateByUrl('/hotels');
                    })
  }

  cancel(){
    this.router.navigateByUrl('/hotels');
  }

  get formValues(){
    return this.createNewHotelForm.controls;
  }

  isValid(): boolean{
    this.submitted = true;
    if (this.createNewHotelForm.invalid)
    {
      return false;
    }
    return true;
  }

}
