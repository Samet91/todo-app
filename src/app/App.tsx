// import React, { useState } from 'react';
// import logo from './logo.svg';
//import styles from './App.module.css';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
    {
      title: 'Check-up',
      description: 'Arzt',
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
    console.log(todo);
    console.log(newTodos);
  }

  return (
    <div>
      <Title>Todo-Liste</Title>

      <CreateTask onSubmit={handleSubmit}></CreateTask>

      <ul>
        <Todo isDone={true} title={'Aufräumen'} description={'Schuhe'}></Todo>
        <Todo isDone={true} title={'Einkaufen'} description={'Tomaten'}></Todo>
        <Todo isDone={true} title={'Projekte(IT)'} description={'React'}></Todo>
        <Todo isDone={true} title={'CV'} description={'React'}></Todo>
      </ul>
    </div>
  );
}

export default App;

/* <BrowserRouter>
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <img src={logo} className={styles['App-logo']} alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <button onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className={styles['App-link']}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className={styles['App-link']}
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
          <Switch>
            <Route path="/about">
              <main>About</main>
            </Route>
            <Route path="/">
              <main>Home</main>
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>*/
