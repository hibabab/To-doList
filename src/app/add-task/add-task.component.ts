
import { Component, Input } from '@angular/core';


import { TaskService } from '../shared/service/task.service';
import { Task } from '../shared/interface/task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  Task= {} as Task;
  isModalOpen = false;
  today: string = new Date().toISOString().split('T')[0];

  constructor(private TaskService: TaskService) {}

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  addOneTache() { 
    this.TaskService.addTache(this. Task);
    console.log('Tâche ajoutée'); 
    this.toggleModal();  
  }
}


