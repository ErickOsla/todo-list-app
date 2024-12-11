import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage {
  taskTitle: string = '';
  taskDescription: string = '';

  constructor(private navCtrl: NavController, private taskService: TaskService) {}

  addTask() {
    if (this.taskTitle && this.taskDescription) {
      // Crear una nueva tarea
      const newTask = {
        title: this.taskTitle,
        description: this.taskDescription,
        completed: false,
      };

      // Guardar la tarea usando el servicio
      this.taskService.addTask(newTask);

      // Redirigir a la pantalla principal
      this.navCtrl.navigateBack('/home');
    }
  }
}
