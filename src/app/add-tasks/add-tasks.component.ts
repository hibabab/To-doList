import { Component } from '@angular/core';
import { TaskService } from '../shared/service/task.service';
import { Task,Priority } from '../shared/interface/task';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent {
  Task = {} as Task;
  isModalOpen = false;
  today: string = new Date().toISOString().split('T')[0];

  constructor(private TaskService: TaskService) {}

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  addOneTache(): void {
    // Add the task using the TaskService
    this.TaskService.addTask(this.Task);
    
    // Reset the Task object after adding the task
    this.Task = {
      Id: 0, // or null if Id is optional
      Title: '',
      Description: '',
      StartDate: '',
      Deadline: '',
      priority: Priority.Low,
      completed: false
    };
    
    // Toggle the modal to close it
    this.toggleModal();
  }
  
  isDateInPast(date: string): boolean {
    return new Date(date) < new Date(this.today);
  }
}
