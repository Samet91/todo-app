import React from 'react';
import classes from './Todo.module.css';

type TodoProps = {
  isDone: boolean;
  title: string;
  description: string;
};
function Todo({ isDone, title, description }: TodoProps): JSX.Element {
  return (
    <div className={classes.todo_container}>
      <li className={isDone ? classes.div_true : classes.div_false}>
        <h1 className={classes.h1}>{title}</h1>
        <p className={classes.li}>{description}</p>
      </li>
    </div>
  );
}

export default Todo;
