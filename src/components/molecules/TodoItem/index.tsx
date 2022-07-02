import { FC, ReactNode } from 'react';

import { Edit, Delete } from 'properties/color';
import TodoContent from 'components/atoms/TodoContent';
import TodoButton from 'components/atoms/TodoButton';

interface TodoItemProps {
  children?: ReactNode;
}

const TodoItem: FC<TodoItemProps> = ({ children }) => {
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
      >
        Delete
      </TodoButton>
    </li>
  );
};

export default TodoItem;
