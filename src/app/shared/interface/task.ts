export interface Task {
    Id: number;
    Title: string;
    Description: string;
    StartDate: string;
    Deadline: string;
    priority: Priority;
    completed:boolean
    completionDate:string
  
   
}
export enum Priority {
    High = 'High',
    Medium = 'Medium',
    Low = 'Low'
  }