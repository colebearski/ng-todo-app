import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Empty array to capture our form value input
  todoArray = [];
  todo;

  // Add todo item
  addTodo(value) {
    if (value !== "") {
      this.todoArray.push(value)
    } else {
      alert('Field required **')
    }
  }

  // Delete todo item
  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1)
      }
    }
  }

  // Submit todo item
  todoSubmit(value: any) {
    if (value !== "") {
      this.todoArray.push(value.todo)
      // this.todoForm.reset()
    } else {
      alert('Field required **')
    }

  }

}