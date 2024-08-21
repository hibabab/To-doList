import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { EditTaskComponent } from './edit-task/edit-task.component';

import { EditAddTaskComponent } from './edit-add-task/edit-add-task.component';

import { AddTaskComponent } from './add-task/add-task.component';

import { ToDoListComponent } from './to-do-list/to-do-list.component';



@NgModule({
  declarations: [
    AppComponent,
    EditTaskComponent,
   

    
   
    
      EditAddTaskComponent,
     
      AddTaskComponent,
      ToDoListComponent,
      
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
