export interface Tache {
    Id: number;
    Title: string;
    Description: string;
    StartDate: Date;
    Deadline: Date;
    priority: Priority;
    completed:boolean
  
   
}
export enum Priority {
    High = 'High',
    Medium = 'Medium',
    Low = 'Low'
  }
  
