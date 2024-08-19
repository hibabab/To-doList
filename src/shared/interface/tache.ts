export interface Tache {
    Id: number;
    Title: string;
    Description: string;
    StartDate: Date;
    Deadline: Date;
    priority: Priority;
   
}

export enum Priority {
    Low,
    Medium,
    High
}
