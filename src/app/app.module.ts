import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';


import { EditAddTaskComponent } from './edit-add-task/edit-add-task.component';

import { AddTaskComponent } from './add-task/add-task.component';

import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { EditTasksComponent } from './edit-tasks/edit-tasks.component';



@NgModule({
  declarations: [
    AppComponent,
   
   

    
   
    
      EditAddTaskComponent,
     
      AddTaskComponent,
      ToDoListComponent,
      EditTasksComponent,
      
  
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
