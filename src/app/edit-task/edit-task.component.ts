import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tache } from '../../shared/interface/tache'; // Assurez-vous que le chemin est correct
import { TacheService } from '../../shared/services/tache.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'] // Correction du nom de la clé
})
export class EditTaskComponent {

   tache: Tache = {} as Tache; // Définition du type Tache pour plus de précision
 
 

  
  }


