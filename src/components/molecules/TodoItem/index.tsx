import React, { FC, ReactNode } from 'react';
import { observer, useLocalObservable } from 'mobx-react';

import { Edit, Delete, ConfirmEdit } from 'properties/color';
import TodoContent from 'components/atoms/TodoContent';
import TodoButton from 'components/atoms/TodoButton';
import todoStore from 'store/todoStore';
import TodoEdit from 'components/atoms/TodoEdit';

interface TodoItemProps {
  todoId: number;
  children?: ReactNode;
  todoContent: string;
}

interface TodoItemState {
  isEdit: boolean;
  currentText: string;
  setIsEdit: (newIsEdit: boolean) => void;
  setCurrentText: (newText: string) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todoId, children, todoContent }) => {
  const { isEdit, currentText, setIsEdit, setCurrentText } = useLocalObservable<TodoItemState>(() => ({
    isEdit: false,
    currentText: todoContent,
    setIsEdit(newIsEdit) { this.isEdit = newIsEdit; },
    setCurrentText(newText) { this.currentText = newText; },
  }));

  const onEditMode: () => void = () => { setIsEdit(true); };
  const onEdit: (newText: string) => void = (newText: string) => {
    setCurrentText(newText);
  };
  const onConfirmEdit: (newText: string) => void = (newText: string) => {
    todoStore.confirmEditTodo(todoId, newText);
    setCurrentText(newText);
    setIsEdit(false);
  };
  const onDelete: () => void = () => { todoStore.deleteTodo(todoId); };

  return (
    <li>
      {
        isEdit ? (
          <>
            <TodoEdit
              value={currentText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => { onEdit(e.currentTarget.value); }}
            />
            <TodoButton
              color={ConfirmEdit.MAIN_COLOR}
              onClick={() => { onConfirmEdit(currentText); }}
            >
              Confirm
            </TodoButton>
          </>
        ) : (
          <>
            <TodoContent>
              { children }
            </TodoContent>
            <TodoButton
              color={Edit.MAIN_COLOR}
              onClick={onEditMode}
            >
              Edit
            </TodoButton>
            <TodoButton
              color={Delete.MAIN_COLOR}
              onClick={onDelete}
            >
              Delete
            </TodoButton>
          </>
        )
      }
    </li>
  );
};

export default observer(TodoItem);
