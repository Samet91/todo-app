import React, { useState } from 'react';
import classes from './CreateTask.module.css';

type CreateTaskProps = {
  onSubmit: (todo: {
    title: string;
    description: string;
    isDone: boolean;
  }) => void;
};

function CreateTask({ onSubmit }: CreateTaskProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({ title, description, isDone:false });
  }

  return (
    <form className={classes.form} onSubmit={(event) => handleSubmit(event)}>
      <label>
        Title:{' '}
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        Description:{' '}
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <input className={classes.button} type="submit" />
    </form>
  );
}

export default CreateTask;

// <form className={classes.formElement}>
//       <label className={classes.label} htmlFor="title">
//         Title:
//         <input type="text" name="name" id="title" placeholder="titlename" />
//       </label>
//       <label className={classes.label} htmlFor="description">
//         Description:
//         <input
//           type="text"
//           name="name"
//           id="description"
//           placeholder="description"
//         />
//       </label>
//       <button className={classes.button}>Senden</button>
//     </form>
