import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tache } from '../../shared/interface/tache'; // Assurez-vous que le chemin est correct
import { TacheService } from '../../shared/services/tache.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'] 
})
export class EditTaskComponent {
  today: string = new Date().toISOString().split('T')[0];


   tache: Tache = {} as Tache; 
   @Output() closeModal = new EventEmitter<void>();
   @Input()
  tachee!: Tache;
   constructor(private tacheService: TacheService) {}
 
   

   onClose() {
     this.closeModal.emit();
   }
   onEdit(): void {
    if (this.tachee) {
      this.tacheService.updateTache(this.tachee);
      // Fermer le modal ou rediriger l'utilisateur après la mise à jour
    }
   

  
  }


}