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

  private saveTaches(): void {
    if (this.isBrowser()) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.tasks));
    }
  }

  getTaches(): Task[] {
    
    return this.tasks;
  }

  addTache(tache: Task): void {
    this.tasks.push(tache);
    this.saveTaches();
   
  }

  deleteTache(id: number): void {
    this.tasks.splice(id,1);
    this.saveTaches(); // Sauvegarder les tâches après suppression
  }

  toggleCompletion(id: number): void {
    const index = this.tasks.findIndex(tasks => tasks.Id === id);
  
    
  
   
    this.tasks[index].completed = !this.tasks[index].completed;
  
   
    this.saveTaches();
  }
  

  
  updateTask(updatedTask: Task): void {
    // Vérifiez si la tâche existe
    const index = this.tasks.findIndex(task => task.Id === updatedTask.Id);
  
    if (index === -1) {
      console.error('Task not found');
      return; // Ou gérer l'erreur de manière appropriée
    }
  
    // Utilisez map pour créer un nouveau tableau avec la tâche mise à jour
    this.tasks = this.tasks.map(task =>
      task.Id === updatedTask.Id ? updatedTask : task
    );
  
    // Sauvegardez les tâches mises à jour
    this.saveTaches();
  }
  
}
