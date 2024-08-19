import { Component } from '@angular/core';
import { Tache } from '../../shared/interface/tache';
import { TacheService } from '../../shared/services/tache.service';

@Component({
  selector: 'app-list-tache',
  templateUrl: './list-tache.component.html',
  styleUrl: './list-tache.component.css'
})
export class ListTacheComponent {
  taches:Tache[]=[];
  tache={} as Tache;
  constructor(private tacheService: TacheService)
  {
    this.taches=this.tacheService.getTaches();

  }
addOneTache()
{
  this.tacheService.addTache(this.tache);
  this.tache={} as Tache;

}
deleteTache(id:number)
{
  if(confirm('vous voulez supprimer la tache?'))
  {
    this.tacheService.deleteTache(id);
  }
}

}



