import { observable } from 'mobx';

import { Todo } from 'types';

interface TodoStore {
  todos: Todo[];
  initTodos: (newTodos: Todo[]) => void;
  createTodo: (newTodo: string) => void;
  confirmEditTodo: (todoId: number, newTodo: string) => void;
  deleteTodo: (todoId: number) => void;
}

const todoStore = observable<TodoStore>({
  todos: [],
  initTodos(newTodos) {
    this.todos = newTodos;
  },
  createTodo(newTodo) {
    const newTodos = Array.from(this.todos);
    const newTodoId = newTodos[newTodos.length - 1].todoId + 1;
    newTodos.push({
      todoId: newTodoId,
      todoContent: newTodo,
    });
    this.todos = newTodos;
  },
  confirmEditTodo(todoId, newTodo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].todoId === todoId) {
        const newTodos = Array.from(this.todos);
        newTodos[i].todoContent = newTodo;
        this.todos = newTodos;
        break;
      }
    }
  },
  deleteTodo(todoId) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].todoId === todoId) {
        const newTodos = Array.from(this.todos);
        newTodos.splice(i, 1);
        this.todos = newTodos;
        break;
      }
    }
  },
});

export default todoStore;
