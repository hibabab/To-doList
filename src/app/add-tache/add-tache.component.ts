import { Component } from '@angular/core';
import { Tache } from '../../shared/interface/tache';
import { TacheService } from '../../shared/services/tache.service';

@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrl: './add-tache.component.css'
})
export class AddTacheComponent {

  tache={} as Tache;
  constructor(private tacheService:TacheService){}
  addOneTache()
{
  this.tacheService.addTache(this.tache);
  this.tache={} as Tache;

}
}
