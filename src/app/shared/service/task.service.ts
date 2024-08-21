import { Injectable } from '@angular/core';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  
  private localStorageKey = 'taches'; // Clé pour le localStorage
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
  
    // Sauvegarder les tâches après changement de statut
    this.saveTaches();
  }
  

  // Méthode pour mettre à jour une tâche
  updateTache(updatedTache: Task): void {
    const index = this.tasks.findIndex(tache => tache.Id === updatedTache.Id);
    if (index !== -1) {
      this.tasks[index] = updatedTache;
      this.saveTaches(); // Sauvegarder les tâches après mise à jour
    }
  }
}
