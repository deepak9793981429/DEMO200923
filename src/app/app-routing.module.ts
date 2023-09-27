import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserformComponent } from './userform/userform.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
