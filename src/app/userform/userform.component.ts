import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Validator } from '@angular/forms';


@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent {


  myform=new FormGroup({
  fname:new FormControl([Validators.minLength(1),Validators.maxLength(30)]),
  lname:new FormControl(),
  mname:new FormControl(),
  gender:new FormControl(),
  email:new FormControl(),
  pass:new FormControl(),
   country  :new FormControl(),
  state:new FormControl(),
  city:new FormControl(),
  pincode:new FormControl(),
  phoneno:new FormControl(),
 
  })
  mySumit(){
 console.log(this.myform.value)
  }
}
