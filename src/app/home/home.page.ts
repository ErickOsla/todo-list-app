import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  pendingTasks: Task[] = [];
  completedTasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ionViewWillEnter() {
    this.loadTasks();
  }

  // Cargar tareas desde el servicio y separarlas
  loadTasks() {
    const allTasks = this.taskService.getTasks();
    this.pendingTasks = allTasks.filter((task: Task) => !task.completed);
    this.completedTasks = allTasks.filter((task: Task) => task.completed);
  }

  // Cambiar el estado de una tarea
  toggleTaskStatus(task: Task) {
    this.taskService.updateTask(task); // Actualiza la tarea en el servicio
    this.loadTasks(); // Recarga las tareas para actualizar las listas
  }

  // Eliminar una tarea
  deleteTask(task: Task) {
    this.taskService.deleteTask(task);
    this.loadTasks(); // Recarga las tareas para actualizar las listas
  }
}
