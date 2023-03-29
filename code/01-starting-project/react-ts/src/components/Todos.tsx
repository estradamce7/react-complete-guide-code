import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from '../store/todos-context';
import classes from './Todos.module.css';

// React.FC is a type definition that tells react that this is a functional component (FC)
const Todos: React.FC = () => { // <{}> we are plugging concrete value for that internally used generic type. here we define our own props object type
  const todosCtx = useContext(TodosContext);
  
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} /> // we can use key prop, this is automatically available
      ))}
    </ul>
  );
};

export default Todos;
