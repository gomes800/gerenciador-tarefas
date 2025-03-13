import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from "./components/task-list/task-list.component";
import { TaskFormComponent } from './components/task-form/task-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent, TaskFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerenciador-tarefas';
}
