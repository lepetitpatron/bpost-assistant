import { DatePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

import { Task } from '../models/task.model';

@Component({
  imports: [DatePipe],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  protected readonly today = new Date();
  protected readonly greeting = this.getGreeting(this.today);

  protected readonly tasks = signal<Task[]>([
    { label: 'Task1', mandatory: true, completed: false },
    { label: 'Task2', mandatory: true, completed: false },
    { label: 'Task3', mandatory: true, completed: false },
  ]);
  protected readonly newTaskLabel = signal('');
  protected readonly canAddTask = computed(() => this.newTaskLabel().trim().length > 0);

  protected addOptionalTask(event: Event): void {
    event.preventDefault();
    const label = this.newTaskLabel().trim();
    if (!label) {
      return;
    }
    this.tasks.update((tasks) => [...tasks, { label, mandatory: false, completed: false }]);
    this.newTaskLabel.set('');
  }

  protected toggleTask(index: number): void {
    this.tasks.update((tasks) =>
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  protected resetTasks(): void {
    this.tasks.update((tasks) => tasks.map((task) => ({ ...task, completed: false })));
  }

  private getGreeting(date: Date): string {
    const hour = date.getHours();
    if (hour < 12) {
      return 'Good morning';
    }
    return hour < 18 ? 'Good afternoon' : 'Good evening';
  }
}
