import { Component } from '@angular/core';
import { Priority, Task } from '../shared/interface/task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  isModalOpen = false; // Flag to manage modal visibility
  testedit: boolean = false;
  
  selectedTask= {} as Task;
  
  openAddTaskModal() {
    this.selectedTask = {
      Id: 0, 
      Title: '',
      Description: '',
      StartDate: '',
      Deadline: '',
      priority: Priority.Low,
      completed: false,
      completionDate: ''
    }; 
    this.isModalOpen = true;
  }
  
  closeModal() {
    this.isModalOpen = false;
  }
  

}
