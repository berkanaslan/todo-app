import {Component} from '@angular/core';
import {TodoItem} from "../model/todo-item";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {

  constructor() {
  }

  todoItems: TodoItem[] = [
    new TodoItem("Breakfast", true),
    new TodoItem("Shopping", false),
    new TodoItem("Fitness", false),
  ];

  addItem(value: string) {
    if (value.trim() == "") {
      alert("Bilgi giriniz!");
      return;
    }

    this.todoItems.push(new TodoItem(value, false));
  }
}
