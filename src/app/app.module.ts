import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTacheComponent } from './list-tache/list-tache.component';

import { FormsModule } from '@angular/forms';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AddTachComponent } from './add-tach/add-tach.component';


@NgModule({
  declarations: [
    AppComponent,
    ListTacheComponent,
    
    EditTaskComponent,
    
    AddTachComponent,
  
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
