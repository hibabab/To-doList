export interface Task {
    Id: number;
    Title: string;
    Description: string;
    StartDate: string;
    Deadline: string;
    priority: Priority;
    completed:boolean
  
   
}
export enum Priority {
    High = 'High',
    Medium = 'Medium',
    Low = 'Low'
  }