import { CompilerConfig } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:"",
    component:UsersComponent
    
    
  },
  {
    path:"users",
    component:UsersComponent
  },

{
    path:"edit/:id",
    component:EditComponent
  },
  {
    path:"details/:name",
    component:DetailsComponent
  },
  {
    path: 'users',loadChildren:()=> import('./users/users.module').then(us=>us.UsersModule)
  },
 {
   path:"**",
   component:PagenotfoundComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
