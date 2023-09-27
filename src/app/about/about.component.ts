import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  name:string="Deepak Paswan";
  a:string="599";
  b:string="400";
  c:string="555";
  d:string="600";
  mydate:any =new Date("2021-03-25")
  date:any =new Date().getDate();
  
  

}
