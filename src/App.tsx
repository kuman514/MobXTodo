import { FC } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import TodoCreate from 'components/molecules/TodoCreate';
import TodoList from 'components/organisms/TodoList';
import todoStore from 'store/todoStore';

const AppDiv = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const App: FC<{}> = () => {
  const todoList = todoStore.todos;

  return (
    <AppDiv>
      <TodoList todos={todoList} />
      <TodoCreate />
    </AppDiv>
  );
};

export default observer(App);
