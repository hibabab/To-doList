import { Component, Input, Output, EventEmitter } from '@angular/core';


import { TaskService } from '../shared/service/task.service';
import { Task } from '../shared/interface/task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'] 
})
export class EditTaskComponent {
  today: string = new Date().toISOString().split('T')[0];


  Task: Task= {} as Task; 
   @Output() closeModal = new EventEmitter<void>();
   
tasks: any;
   constructor(private TaskService: TaskService) {}
 
   

   onClose() {
     this.closeModal.emit();
   }
   onEdit(): void {
    if (this.Task) {
      this. TaskService.updateTache(this.Task);
      
    }
   

  
  }


}