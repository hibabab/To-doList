import { Component, Input } from '@angular/core';


import { TaskService } from '../shared/service/task.service';
import { Task } from '../shared/interface/task';


@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.css'
})
export class AddTasksComponent {
    Task= {} as Task;
    isModalOpen = false;
    today: string = new Date().toISOString().split('T')[0];
  
    constructor(private TaskService: TaskService) {}
  
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    }
  
    addOneTache() { 
      this.TaskService.addTask(this. Task);
      console.log('Tâche ajoutée'); 
      this.toggleModal();  
    }
  
  
  
  isDateInPast(date: string): boolean {
    return new Date(date) < new Date(this.today);
  }
  }


