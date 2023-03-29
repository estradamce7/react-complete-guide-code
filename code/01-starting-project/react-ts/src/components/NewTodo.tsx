import { useRef, useContext } from 'react';

import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  // we need to explicitly declare the ref's type
  const todoTextInputRef = useRef<HTMLInputElement>(null); // useRef is a generic function, so we need to specify a concrete value. HTMLInputElement is built-in type. We need to declare a value for this (null)
  
  const submitHandler = (event: React.FormEvent) => { // React.FormEvent is special type provided by react package which is an event obj type which we'll get automatically on form submissions
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value; // "?" is added automatically because the ref is not set to a value yet. "?" means it tried to access the value and if it succeeds the entered value will be stored in enteredText, else "null" will be stored
    // only use "!" if you know for sure that this will never be null/can't be null

    if(enteredText.trim().length === 0) {
      // throw an error
      return;
    };

    todosCtx.addTodo(enteredText);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;