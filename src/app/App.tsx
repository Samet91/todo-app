// import React, { useState } from 'react';
// import logo from './logo.svg';
// import styles from './App.module.css';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Title from './components/Title/Title';
import Button from './components/Button/Button'

function App(): JSX.Element {
  return (
    <div>
      <Title>My Title</Title>
      <Button>Button</Button>
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
