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
  todos: [
    { todoId: 0, todoContent: 'Lorem ipsum' },
    { todoId: 1, todoContent: 'Dolor sit amet' },
    { todoId: 2, todoContent: 'Consectetur adipiscing elit' },
    { todoId: 3, todoContent: 'Quisque at mi vel' },
    { todoId: 4, todoContent: 'Nisl pellentesque placerat' },
    { todoId: 5, todoContent: 'Cras eu sagittis erat' },
    { todoId: 6, todoContent: 'Duis et elit' },
    { todoId: 7, todoContent: 'Rutrum mollis' },
    { todoId: 8, todoContent: 'Lorem at rhoncus lacus' },
    { todoId: 9, todoContent: 'Maecenas ornare gravida imperdiet' },
  ],
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
