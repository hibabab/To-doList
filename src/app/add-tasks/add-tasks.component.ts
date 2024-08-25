import { Component } from '@angular/core';
import { TaskService } from '../shared/service/task.service';
import { Task, Priority } from '../shared/interface/task';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent {
  // The Task object to hold task data
  Task = {} as Task;
  
  // Boolean to control the visibility of the modal
  isModalOpen = false;
  
  // Holds the current date in ISO format for comparison
  today: string = new Date().toISOString().split('T')[0];

  constructor(private TaskService: TaskService) {}

  // Toggles the modal open/closed state
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  // Handles the submission of the task form
  addOneTache(): void {
    // Add the task using the TaskService
    this.TaskService.addTask(this.Task);
    
    // Reset the Task object after adding the task
    this.Task = {
      Id: 0, 
      Title: '',
      Description: '',
      StartDate: '',
      Deadline: '',
      priority: Priority.Low,
      completed: false,
      completionDate: ''
    };
    
    // Toggle the modal to close it
    this.toggleModal();
  }
  
  // Checks if a given date is in the past compared to today
  isDateInPast(date: string): boolean {
    return new Date(date) < new Date(this.today);
  }
  
  // Checks if the start date is before the deadline
  isStartDateBeforeDeadline(startDate: string, deadline: string): boolean {
    const start = new Date(startDate);
    const end = new Date(deadline);
    return start > end;
  }
}
