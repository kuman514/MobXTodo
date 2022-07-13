import { FC } from 'react';
import styled from 'styled-components';

import TodoItem from 'components/molecules/TodoItem';
import { Todo } from 'types';

const UnorderedList = styled.ul`
  text-align: left;
`

interface TodoListProps {
  todos: Todo[];
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
  const todoList = todos.map(({ todoContent, todoId }) => (
    <TodoItem key={todoId} todoId={todoId} todoContent={todoContent}>
      { todoContent }
    </TodoItem>
  ));

  return (
    <UnorderedList>
      { todoList }
    </UnorderedList>
  );
};

export default TodoList;
