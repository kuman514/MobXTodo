import { FC, ReactNode } from 'react';
import { observer } from 'mobx-react';

import { Edit, Delete } from 'properties/color';
import TodoContent from 'components/atoms/TodoContent';
import TodoButton from 'components/atoms/TodoButton';
import todoStore from 'store/todoStore';

interface TodoItemProps {
  todoId: number;
  children?: ReactNode;
}

const TodoItem: FC<TodoItemProps> = ({ todoId, children }) => {
  const onDelete: () => void = () => { todoStore.deleteTodo(todoId); };

  return (
    <li>
      <TodoContent>
        { children }
      </TodoContent>
      <TodoButton
        color={Edit.MAIN_COLOR}
      >
        Edit
      </TodoButton>
      <TodoButton
        color={Delete.MAIN_COLOR}
        onClick={onDelete}
      >
        Delete
      </TodoButton>
    </li>
  );
};

export default observer(TodoItem);
