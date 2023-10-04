import { Component } from '@angular/core';
import { UserformComponent } from '../userform/userform.component';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
 show:boolean=false;
 show2:boolean=false;
 color="red";
 color1="blue";
 color2="green"

  
  myform=new FormGroup({
  fname:new FormControl(""),
  email:new FormControl(""),
  pass:new FormControl(""),
  phoneno:new FormControl(""),
 
  });


}

