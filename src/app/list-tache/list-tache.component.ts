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

  constructor(private tacheService: TacheService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taches = this.tacheService.getTaches();
  }

  toggleCompletion(tache: Tache): void {
    this.tacheService.toggleCompletion(tache.Id);
    this.loadTasks(); // Recharger les tâches pour mettre à jour l'affichage
  }

  deleteTache(id: number): void {
    if (confirm('Vous voulez supprimer la tâche ?')) {
      this.tacheService.deleteTache(id);
      this.loadTasks();
    }
  }
}
