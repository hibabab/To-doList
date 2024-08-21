import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';






import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';




@NgModule({
  declarations: [
    AppComponent,
   
   

    
   
    
     
     
      
      ToDoListComponent,
      AddTasksComponent,
     
      
  
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
