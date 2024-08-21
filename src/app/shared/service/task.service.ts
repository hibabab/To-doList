import { Injectable } from '@angular/core';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  
  private localStorageKey = 'taches'; 
  tasks: Task[] = [];

  constructor() {
    if (this.isBrowser()) {
      this.loadTaches();
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  private loadTaches(): void {
    if (this.isBrowser()) {
      const tachesJson = localStorage.getItem(this.localStorageKey);
      this.tasks = tachesJson ? JSON.parse(tachesJson) : [];
    }
  }

  private saveTasks(): void {
    if (this.isBrowser()) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.tasks));
    }
  }

  getTasks(): Task[] {
    
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.saveTasks();
    const tasks = this.getTasks();
   
  }

  deleteTache(id: number): void {
    this.tasks.splice(id,1);
    this.saveTasks(); // Sauvegarder les tâches après suppression
  }

  toggleCompletion(id: number): void {
    const tasks = this.getTasks();
    const index = tasks.findIndex(task => task.Id === id);
    
    if (index !== -1) {
      tasks[index].completed = !tasks[index].completed;
      this.saveTasks();
    }
  }
  
  updateTask(updatedTask: Task): void {
   
    const index = this.tasks.findIndex(task => task.Id === updatedTask.Id);
  
    if (index === -1) {
      console.error('Task not found');
      return; 
    }
  
    
    this.tasks = this.tasks.map(task =>
      task.Id === updatedTask.Id ? updatedTask : task
    );
  
    
    this.saveTasks();
  }
  
}
