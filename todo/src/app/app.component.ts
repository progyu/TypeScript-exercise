import { Component } from '@angular/core';
import { generate } from 'rxjs';

interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1 class="title">Todos</h1>
  <div class="ver">Angular</div>

  <input class="input-todo" placeholder="What needs to be done?" autofocus (keyup.enter)="addTodo(input)" #input>
  <ul class="nav">
    <li id="all" class="active">All</li>
    <li id="active">Active</li>
    <li id="completed">Completed</li>
  </ul>

  <ul class="todos">
  <li class="todo-item" *ngFor="let todo of todos">
    <input id="ck-{{todo.id}}" class="custom-checkbox" type="checkbox" [checked]="todo.completed" (change)="toggleTodo(todo.id)">
    <label for="ck-{{todo.id}}" [class.completed]="todo.completed">{{todo.content}}</label>
    <i class="remove-todo far fa-times-circle" (click)="removeTodo(todo.id)"></i>
  </li>
  </ul>
  <div class="footer">
    <div class="complete-all">
      <input class="custom-checkbox" type="checkbox" id="ck-complete-all" (change)="completeAll(ckall.checked)" #ckall>
      <label for="ck-complete-all">Mark all as complete</label>
    </div>
    <div class="clear-completed">
      <button class="btn" (click)="removeCompleted()">Clear completed (<span class="completed-todos">{{completedTodo()}}</span>)</button>
      <strong class="active-todos">{{uncompletedTodo()}}</strong> items left
    </div>
  </div>
</div>
<pre>{{todos | json}}</pre>`})
export class AppComponent {
  todos: ITodo[] = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'JS', completed: true }
  ];
  // todos: Array<Todo> = [];
  addTodo(inputElem: HTMLInputElement) {
    this.todos = [{ id: this.generateId(), content: inputElem.value, completed: false }, ...this.todos];
    inputElem.value = '';
  }

  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleTodo(id: number) {
    this.todos = this.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
  }

  completeAll(completed: boolean) {
    this.todos = this.todos.map((todo) => { return { ...todo, completed } });
  }

  completedTodo() {
    return this.todos.filter(todo => todo.completed).length;
  }

  uncompletedTodo() {
    return this.todos.length - this.completedTodo();
  }

  removeCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
}