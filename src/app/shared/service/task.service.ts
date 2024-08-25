import { Injectable } from '@angular/core';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private localStorageKey = 'tasks'; // Key used to store tasks in localStorage
  tasks: Task[] = []; // Array to hold all tasks
  completedTasks: Task[] = []; // Array to hold completed tasks

  constructor() {
    if (this.isBrowser()) {
      this.loadTasks(); // Load tasks from localStorage on initialization
    }
  }

  // Checks if the code is running in a browser environment with localStorage support
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  // Loads tasks from localStorage and initializes the tasks array
  private loadTasks(): void {
    if (this.isBrowser()) {
      const tasksJson = localStorage.getItem(this.localStorageKey);
      if (tasksJson) {
        this.tasks = JSON.parse(tasksJson);
        console.log('Tasks loaded from localStorage:', this.tasks); // Debugging log
      } else {
        console.log('No tasks found in localStorage'); // Debugging log
      }
    }
  }

  // Saves the tasks array to localStorage
  private saveTasks(): void {
    if (this.isBrowser()) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.tasks));
      console.log('Tasks saved to localStorage:', this.tasks); // Debugging log
    }
  }

  // Returns the list of all tasks
  getTasks(): Task[] {
    return this.tasks;
  }

  // Returns the list of completed tasks
  getCompletedTasks(): Task[] {
    return this.completedTasks;
  }

  // Adds a new task to the tasks array and saves the updated array to localStorage
  addTask(task: Task): void {
    this.tasks.push(task);
    this.saveTasks();
  }

  // Deletes a task by its index and saves the updated array to localStorage
  deleteTask(index: number): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1); // Remove the task at the specified index
      this.saveTasks();
    } else {
      console.error('Invalid index for deleting task:', index); // Debugging log
    }
  }

  // Toggles the completion status of a task
  toggleCompletion(taskIndex: number): void {
    if (taskIndex >= 0 && taskIndex < this.tasks.length) {
      const task = this.tasks[taskIndex];
      const today = new Date().toISOString().split('T')[0]; // Get today's date in ISO format
      task.completionDate = today;
      task.completed = true;
      this.tasks.splice(taskIndex, 1); // Remove the task from the tasks array
      this.completedTasks.push(task); // Add the task to the completedTasks array
      this.saveTasks();
    } else {
      console.error('Invalid index for toggling completion:', taskIndex); // Debugging log
    }
  }

  // Marks a completed task as not completed and moves it back to the tasks array
  markAsNotCompleted(taskIndex: number): void {
    if (taskIndex >= 0 && taskIndex < this.completedTasks.length) {
      const task = this.completedTasks[taskIndex];
      task.completed = false;
      this.completedTasks.splice(taskIndex, 1); // Remove the task from the completedTasks array
      this.tasks.push(task); // Add the task back to the tasks array
      this.saveTasks();
    } else {
      console.error('Invalid index for marking as not completed:', taskIndex); // Debugging log
    }
  }

  // Updates an existing task with new details
  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.Id === updatedTask.Id);
    if (index !== -1) {
      this.tasks[index] = updatedTask; // Update the task in the tasks array
      this.saveTasks();
    } else {
      console.error('Task not found for update:', updatedTask.Id); // Debugging log
    }
  }
}
