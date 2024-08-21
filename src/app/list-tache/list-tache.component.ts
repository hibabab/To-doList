import { Component, OnInit } from '@angular/core';
import { Tache } from '../../shared/interface/tache';
import { TacheService } from '../../shared/services/tache.service';

@Component({
  selector: 'app-list-tache',
  templateUrl: './list-tache.component.html',
  styleUrls: ['./list-tache.component.css']
})
export class ListTacheComponent implements OnInit {
  taches: Tache[] = [];
  selectedTask: Tache | null = null;
  isModifierModalOpen = false;

  constructor(private tacheService: TacheService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taches = this.tacheService.getTaches();
  }

  toggleCompletion(tache: Tache): void {
   
    this.loadTasks(); // Recharger les tâches pour mettre à jour l'affichage
  }

  deleteTache(index: number): void {
    const tacheId = this.taches[index].Id;
    if (confirm('Vous voulez supprimer la tâche ?')) {
      this.tacheService.deleteTache(tacheId);
      this.loadTasks();
    }
  }

  openModifierModal(task: Tache): void {
    this.selectedTask = { ...task }; // Crée une copie pour éviter les modifications directes
    this.isModifierModalOpen = true;
  }

  closeModal(): void {
    this.isModifierModalOpen = false;
    this.selectedTask = null; // Réinitialise la tâche sélectionnée
  }
}
