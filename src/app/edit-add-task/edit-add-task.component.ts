import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Priority, Task } from '../shared/interface/task';
import { TaskService } from '../shared/service/task.service';
import { table } from 'node:console';

@Component({
  selector: 'app-edit-add-task',
  templateUrl: './edit-add-task.component.html',
  styleUrl: './edit-add-task.component.css'
})
export class EditAddTaskComponent {
  


   @Input() Task = {} as Task;
   @Output() closeModal = new EventEmitter<void>();
  
   @Input()
  Test: boolean = false;


onClose() {
  this.closeModal.emit();
}

   
  // Holds the current date in ISO format for comparison
  today: string = new Date().toISOString().split('T')[0];

  constructor(private TaskService: TaskService) {}

 

  // Handles the submission of the task form
  addOrEdit(): void {
   
     
        if (this.Test) {
          this.TaskService.updateTask(this.Task);
         
      } else {
          this.TaskService.addTask(this.Task);
      
          this.resetTask();
       
      }
      
    this.onClose()
  }
  
  resetTask() {
    this.Task = {

      Id:0,
      Title: '',
      Description: '',
      StartDate: '',
      Deadline: '',
      priority: Priority.Low,
      completed: false,
      completionDate: ''
    };
  }
  
  isDateInPast(date: string): boolean {
    return new Date(date) < new Date(this.today);
  }
  
 
  isStartDateBeforeDeadline(startDate: string, deadline: string): boolean {
    const start = new Date(startDate);
    const end = new Date(deadline);
    return start > end;
  }
}






