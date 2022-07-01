import { FC } from 'react';

import TodoInput from 'components/atoms/TodoInput';
import TodoButton from 'components/atoms/TodoButton';
import { Create } from 'properties/color';

const TodoCreate: FC<{}> = () => {
  return (
    <div>
      <TodoInput />
      <TodoButton
        color={Create.MAIN_COLOR}
      >
        Create
      </TodoButton>
    </div>
  );
};

export default TodoCreate;
