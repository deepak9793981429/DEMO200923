import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserformComponent } from './userform/userform.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"about",
    component:AboutComponent,

  },
  {
    path:"contact",
    component:ContactComponent,
  },
  {
         path:"userform",
         component:UserformComponent
  }
  ,
  {
    path:"home",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
