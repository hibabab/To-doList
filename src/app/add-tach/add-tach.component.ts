import { Component } from '@angular/core';
import { Tache } from '../../shared/interface/tache';
import { TacheService } from '../../shared/services/tache.service';

@Component({
  selector: 'app-add-tach',
  templateUrl: './add-tach.component.html',
  styleUrl: './add-tach.component.css'
})
export class AddTachComponent {
  tache={} as Tache;
  isModalOpen = false;
  today: string = new Date().toISOString().split('T')[0];


  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
  constructor(private tacheService:TacheService){}
  addOneTache()
{
  this.tacheService.addTache(this.tache);
  this.tache={} as Tache;

}
}



