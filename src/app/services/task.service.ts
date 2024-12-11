import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {}

  // Obtener todas las tareas
  getTasks(): Task[] {
    return this.tasks;
  }

  // Agregar una nueva tarea
  addTask(task: Task) {
    this.tasks.push(task);
  }

  // Actualizar una tarea
  updateTask(updatedTask: Task) {
    const index = this.tasks.findIndex(task => task.title === updatedTask.title);
    if (index > -1) {
      this.tasks[index] = updatedTask;
    }
  }

  // Eliminar una tarea
  deleteTask(taskToDelete: Task) {
    this.tasks = this.tasks.filter(task => task !== taskToDelete);
  }
}
