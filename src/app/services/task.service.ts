import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    this.loadFromLocalStorage();
   }

   getTasks(): Task[] {
    return this.tasks;
   }

   addTasks(title: string): void {
    const newTask: Task = { id: Date.now(), title, completed: false };
    this.tasks.push(newTask);
    this.saveToLocalStorage();
   }

   toggleTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveToLocalStorage();
    }
   }

   deleteTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveToLocalStorage();
   }

   private saveToLocalStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
   }

   private loadFromLocalStorage(): void {
    const data = localStorage.getItem('tasks');
    if (data) {
      this.tasks = JSON.parse(data);
    }
   }
}
