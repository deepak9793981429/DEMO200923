import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent {


  myform=new FormGroup({
  fname:new FormControl("",[Validators.required,Validators.maxLength(1),Validators.minLength(20)]),
  email:new FormControl("",[Validators.required]),
  pass:new FormControl("",[Validators.required]),
  phoneno:new FormControl("",[Validators.required]),
 
  })

  mySumit(){
   var name=this.myform.value.fname;
   var email=this.myform.value.email;
   var pass=this.myform.value.pass;
   var phone=this.myform.value.phoneno;

   console.log(name);
   console.log(email);
   console.log(pass);
   console.log(phone);

  
   
//  if(this.myform.valid)
//  {
//    alert("welcome");
//    console.log(this.myform.value);
//  }
//  else
//  {
//    alert("wrong");
//  }

  }
  
  
}
