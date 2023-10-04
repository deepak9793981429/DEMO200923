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
  
  title="hello Angular Project"
  heading="hello Heading buinding pipes"
  dates=Date();
  obj={name:'deepak',city:'noida sector59',}
  color:string="red"
  fontsize:string="50px"
  myselect:string=""
    jsonData=[{name:"deepak",
                      email:"deepak@gmail.con",
                      }]

                      jsondata :any[]=[  
                        {  
                          "id": 1,  
                          "name": "Jack",  
                          "email": "jack@gmail.com",  
                          "gender": "male"  
                        },  
                        {  
                          "id": 2,  
                          "name": "Peter",  
                          "email": "peter@gmail.com",  
                          "gender": "male"  
                        },  
                        {  
                          "id": 3,  
                          "name": "Mary",  
                          "email": "mary@gmail.com",  
                          "gender": "female"  
                        },  
                        {  
                          "id": 4,  
                          "name": "Smith",  
                          "email": "smith@gmail.com",  
                          "gender": "male"  
                        },  
                        {  
                          "id": 5,  
                          "name": "John",  
                          "email": "john@gmail.com",  
                          "gender": "male"  
                        }  
                      ]  
}
