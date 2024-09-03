import { Injectable } from '@angular/core';
import { Task } from '../interface/task';
import { table } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksStorageKey = 'tasks'; // Key for ongoing tasks
  private completedTasksStorageKey = 'completedTasks'; // Key for completed tasks

  tasks: Task[] = []; // Array for ongoing tasks
  completedTasks: Task[] = []; // Array for completed tasks

  constructor() {
    this.loadTasks();
    this.loadCompletedTasks();
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  private loadTasks(): void {
    if (this.isBrowser()) {
      const tasksJson = localStorage.getItem(this.tasksStorageKey);
      this.tasks = tasksJson ? JSON.parse(tasksJson) : [];
    }
  }

  private loadCompletedTasks(): void {
    if (this.isBrowser()) {
      const completedTasksJson = localStorage.getItem(this.completedTasksStorageKey);
      this.completedTasks = completedTasksJson ? JSON.parse(completedTasksJson) : [];
    }
  }

  private saveTasks(): void {
    if (this.isBrowser()) {
      localStorage.setItem(this.tasksStorageKey, JSON.stringify(this.tasks));
      localStorage.setItem(this.completedTasksStorageKey, JSON.stringify(this.completedTasks));
    }
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getCompletedTasks(): Task[] {
    return this.completedTasks;
  }
 


  addTask(task: Task): void {
    this.tasks.push(task);
    

    this.saveTasks();
}

  deleteTask(type: 'ongoing' | 'completed', index: number): void {
    if (type === 'ongoing') {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks.splice(index, 1);
      } else {
        console.error('Invalid index for deleting ongoing task:', index);
      }
    } else if (type === 'completed') {
      if (index >= 0 && index < this.completedTasks.length) {
        this.completedTasks.splice(index, 1);
      } else {
        console.error('Invalid index for deleting completed task:', index);
      }
    }
    this.saveTasks();
  }

  toggleCompletion(taskIndex: number): void {
    if (taskIndex >= 0 && taskIndex < this.tasks.length) {
      const task = this.tasks[taskIndex];
      task.completed = true;
      task.completionDate = new Date().toISOString().split('T')[0];
      this.completedTasks.push(task);
      this.tasks.splice(taskIndex, 1);
      this.saveTasks();
    } else {
      console.error('Invalid index for toggling completion:', taskIndex);
    }
  }

  markAsNotCompleted(taskIndex: number): void {
    if (taskIndex >= 0 && taskIndex < this.completedTasks.length) {
      const task = this.completedTasks[taskIndex];
      task.completed = false;
      this.tasks.push(task);
      this.completedTasks.splice(taskIndex, 1);
      this.saveTasks();
    } else {
      console.error('Invalid index for marking as not completed:', taskIndex);
    }
  }

  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.Id === updatedTask.Id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.saveTasks();
    } else {
      console.error('Task not found for update:', updatedTask.Id);
    }
  }
}
