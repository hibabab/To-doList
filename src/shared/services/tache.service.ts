import { Injectable } from '@angular/core';
import { Tache } from '../interface/tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor() {
   }
   taches:Tache[]=[]

  getTaches()
  {
    console.table(this.taches);
    return this.taches;

  }
  addTache(tache:Tache)
  {
    this.taches.push(tache);
    console.table(this.taches);
  }
  deleteTache(id:number)
  {
    this.taches.splice(id,1);
  }
  
}
