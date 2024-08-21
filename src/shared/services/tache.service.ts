import { Injectable } from '@angular/core';
import { Tache } from '../interface/tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private localStorageKey = 'taches'; // Clé pour le localStorage
  taches: Tache[] = [];

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
      this.taches = tachesJson ? JSON.parse(tachesJson) : [];
    }
  }

  private saveTaches(): void {
    if (this.isBrowser()) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.taches));
    }
  }

  getTaches(): Tache[] {
    console.table(this.taches);
    return this.taches;
  }

  addTache(tache: Tache): void {
    this.taches.push(tache);
    this.saveTaches(); // Sauvegarder les tâches dans le localStorage
  }

  deleteTache(id: number): void {
    this.taches = this.taches.filter(tache => tache.Id !== id); // Utiliser filter pour la suppression
    this.saveTaches(); // Sauvegarder les tâches après suppression
  }

  toggleCompletion(id: number): void {
    const index = this.taches.findIndex(tache => tache.Id === id);
  
    
  
   
    this.taches[index].completed = !this.taches[index].completed;
  
    // Sauvegarder les tâches après changement de statut
    this.saveTaches();
  }
  

  // Méthode pour mettre à jour une tâche
  updateTache(updatedTache: Tache): void {
    const index = this.taches.findIndex(tache => tache.Id === updatedTache.Id);
    if (index !== -1) {
      this.taches[index] = updatedTache;
      this.saveTaches(); // Sauvegarder les tâches après mise à jour
    }
  }
}
