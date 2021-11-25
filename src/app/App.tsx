import React, { useState } from 'react';
import Title from './components/Title/Title';
import Todo from './components/Todo/Todo';
import CreateTask from './components/CreateTask/CreateTask';

function App(): JSX.Element {
  const [todos, setTodos] = useState([
    {
      title: 'Aufräumen',
      description: 'Schuhe',
      isDone: true,
    },
    {
      title: 'Einkaufen',
      description: 'Tomaten',
      isDone: true,
    },
    {
      title: 'Projekte(IT)',
      description: 'React',
      isDone: true,
    },
    {
      title: 'CV',
      description: 'React',
      isDone: true,
    },
  ]);

  function handleSubmit(todo: {
    title: string;
    description: string;
    isDone: boolean;
  }) {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  }

  return (
    <div>
      <Title>Todo-Liste</Title>
      <ul>
        <CreateTask onSubmit={handleSubmit} />
        {todos.map((todo) => (
          <Todo
            title={todo.title}
            description={todo.description}
            isDone={todo.isDone}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
