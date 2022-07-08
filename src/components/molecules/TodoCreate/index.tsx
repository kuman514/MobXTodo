import { FC } from 'react';
import { observer, useLocalObservable } from 'mobx-react';

import TodoInput from 'components/atoms/TodoInput';
import TodoButton from 'components/atoms/TodoButton';
import { Create } from 'properties/color';
import todoStore from 'store/todoStore';

interface TodoCreateState {
  writing: string;
  onWrite: (newWrite: string) => void;
}

const TodoCreate: FC<{}> = () => {
  const state = useLocalObservable<TodoCreateState>(() => ({
    writing: '',
    onWrite(newWrite) {
      this.writing = newWrite;
    },
  }));

  const handleWrite = (e: React.FormEvent<HTMLInputElement>) => {
    state.onWrite(e.currentTarget.value);
  };

  const onAddTodo = () => {
    todoStore.createTodo(state.writing);
    state.onWrite('');
  };

  return (
    <div>
      <TodoInput
        value={state.writing}
        onInput={handleWrite}
      />
      <TodoButton
        color={Create.MAIN_COLOR}
        onClick={onAddTodo}
      >
        Create
      </TodoButton>
    </div>
  );
};

export default observer(TodoCreate);
