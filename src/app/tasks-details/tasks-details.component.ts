import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../shared/interface/task';
import { TaskService } from '../shared/service/task.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.css']
})
export class TasksDetailsComponent implements OnInit {
  @Input() title: string = ''; // Input property to determine the title of the task list
  Tasks: Task[] = []; // Array to store ongoing tasks
  completedtasks: Task[] = []; // Array to store completed tasks
  Table: Task[] = []; // Array to store tasks for display in the table
  showCompletionDateColumn: boolean = false; // Flag to determine if completion date column should be shown
  isModalOpen = false; // Flag to manage modal visibility

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks(); // Load tasks when the component initializes
  }

  loadTasks(): void {
    this.Tasks = this.taskService.getTasks(); // Retrieve ongoing tasks from the service
    this.completedtasks = this.taskService.getCompletedTasks(); // Retrieve completed tasks from the service
    this.updateTable(); // Update the table based on the current title
  }

  updateTable(): void {
    this.showCompletionDateColumn = this.title === 'Completed Tasks'; // Show completion date column if title is 'Completed Tasks'
    if (this.title === 'Tasks In Progress') {
      this.Table = this.Tasks; // Set the table to display ongoing tasks
    } else if (this.title === 'Completed Tasks') {
      this.Table = this.completedtasks; // Set the table to display completed tasks
    }
  }

  deleteTask(index: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this task permanently?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.taskService.deleteTask(index); // Call the service to delete the task
        Swal.fire('Deleted!', 'The task has been deleted.', 'success'); // Show success message
      }
    });
  }

  completeOrNotComplete(index: number): void {
    const task = this.Table[index]; // Get the task at the specified index
    if (task.completed) {
      this.taskService.toggleCompletion(index); // Toggle completion status if task is already completed
      this.updateTable(); // Update the table to reflect the changes
    } else {
      this.taskService.markAsNotCompleted(index); // Mark the task as not completed
      this.updateTable(); // Update the table to reflect the changes
    }
  }
}
