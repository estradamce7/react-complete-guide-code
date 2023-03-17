import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('BUTTON RUNNING');
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// React.memo does not work here because its props changes. Refer to App.js toggleHandler, as the App.js re-renders so will the function
export default React.memo(Button);
