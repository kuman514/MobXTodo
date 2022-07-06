import TodoCreate from 'components/molecules/TodoCreate';
import TodoList from 'components/organisms/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList
          todos={[
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
          ]}
        />
        <TodoCreate />
      </header>
    </div>
  );
}

export default App;
