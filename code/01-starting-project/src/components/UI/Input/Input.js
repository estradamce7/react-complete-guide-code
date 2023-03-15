import React, { useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";

// Input is still a component but now it is a React component that is capable of being bound to a ref
const Input = React.forwardRef((props, ref) => {
  // that is a ref if a ref should be set from outside | ref comes from Login.js, it establishes the connection that allows the binding
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  // With useImperativeHandle and forwardRef we can expose functionalities from a React component to its parent component
  // To then use this component in the parent component through refs and trigger certain functionalities | could also expose values
  useImperativeHandle(ref, () => {
    return {
      focus: activate, // a translation object returned. 'focus' is the externally available name
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
