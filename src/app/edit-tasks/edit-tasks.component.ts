import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../shared/interface/task';
import { TaskService } from '../shared/service/task.service';

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.component.html',
  styleUrl: './edit-tasks.component.css'
})
export class EditTasksComponent {

  @Input()Task= {} as Task;
  isModalOpen = false;
  today: string = new Date().toISOString().split('T')[0];

  constructor(private TaskService: TaskService) {}

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  OnEdit() { 
    this.TaskService.updateTask(this. Task);
    this.toggleModal();  
  }



isDateInPast(date: string): boolean {
  return new Date(date) < new Date(this.today);
}
}



