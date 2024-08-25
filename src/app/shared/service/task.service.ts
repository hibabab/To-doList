import { Injectable } from '@angular/core';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private localStorageKey = 'taches'; 
  tasks: Task[] = [];
  completedTasks: Task[] = [];

  constructor() {
    if (this.isBrowser()) {
      this.loadTasks();
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  private loadTasks(): void {
    if (this.isBrowser()) {
      const tasksJson = localStorage.getItem(this.localStorageKey);
      this.tasks = tasksJson ? JSON.parse(tasksJson) : [];
    }
  }

  private saveTasks(): void {
    if (this.isBrowser()) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.tasks));
    }
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getCompletedTasks() {
    return this.completedTasks;
  }
  addTask(task: Task): void {
    this.tasks.push(task);
    this.saveTasks();
  }

  deleteTask(id: number): void {
    this.tasks.splice(id,1);
    this.saveTasks(); 
  }
  toggleCompletion(taskIndex: number): void {
    const task = this.tasks[taskIndex];
    task.completed = true;
    this.tasks.splice(taskIndex, 1);
    this.completedTasks.push(task);
    this.saveTasks(); 
  }

  markAsNotCompleted(taskIndex: number): void {
    const task = this.completedTasks[taskIndex];
    task.completed = false;
    this.completedTasks.splice(taskIndex, 1);
    this.tasks.push(task);
    this.saveTasks(); 
  }
  
  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.Id === updatedTask.Id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.saveTasks();
    } else {
      console.error('Task not found');
    }
  }
}
