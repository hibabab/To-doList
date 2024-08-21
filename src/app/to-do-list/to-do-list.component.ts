import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'; 
import { TaskService } from '../shared/service/task.service';
import { Task } from '../shared/interface/task';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  Tasks: Task[] = [];
  selectedTask: Task | null = null;
  //titleaction:string='';
  isModalOpen = false;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.Tasks = this.taskService.getTaches();
  }

  toggleCompletion(tache: Task): void {
    tache.completed = !tache.completed; 
    this.taskService.updateTache(tache); 
    this.loadTasks(); 
  }

  deleteTache(index: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this task permanently?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.taskService.deleteTache(index);
        this.loadTasks(); // Recharger les tâches après suppression
        Swal.fire('Deleted!', 'The task has been deleted permanently.', 'success');
      }
    });
  }

  openModal(): void {
  
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
   
  }
}



/*
/*openModal(task: Tache | null): void {
  this.selectedTask = task;
  this.titleaction = task ? 'Edit Task' : 'Add Task';
  this.isModifierModalOpen = true;
}*/