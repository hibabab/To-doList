import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../shared/interface/task';
import { TaskService } from '../shared/service/task.service';


@Component({
  selector: 'app-edit-add-task',
  templateUrl: './edit-add-task.component.html',
  styleUrl: './edit-add-task.component.css'
})
export class EditAddTaskComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Input() title: string | undefined;
  @Input() task!: Task;
  Task: Task = {} as Task; 

  today: string = new Date().toISOString().split('T')[0];

  constructor(private TaskService:TaskService) {}

  onClose(): void {
    this.closeModal.emit();
  }

  
  EditOrUpdate(): void {
    alert('Titre du modal: ' + this.title);
    alert('Tâche: ' + JSON.stringify(this.Task));
    console.log('Titre du modal:', this.title);
    console.log('Données de la tâche avant traitement:', this.Task);

    if (this.title === 'Add Task') {
        console.log('Ajout de la tâche');
        this.TaskService.addTache(this.Task);
        console.log('Tâche ajoutée:', this.Task);
    } else if (this.title === 'Edit Task') {
        console.log('Modification de la tâche');
        this.TaskService.updateTask(this.Task);
        console.log('Tâche modifiée:', this.Task);
    }

  
}

}


