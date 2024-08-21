import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTacheComponent } from './list-tache/list-tache.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:"",component:ListTacheComponent},
  {path:"update/:id",component:EditTaskComponent},
  {path:"navbar",component:NavbarComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
