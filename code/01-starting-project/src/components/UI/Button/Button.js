import React from 'react'; // not needed because we are not using JSX here
import styles from './Button.module.css' // this way to import from a css file if you want to use CSS Modules | also, need to rename the css to add ".module" - this transforms the code so CSS modules work
// import styled from "styled-components";

// import './Button.css';

// // 2 backticks is called attacked template - a method in a styled object. can be used instead of ()
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `; // & is for pseudo element

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}> {/* className={styles.button} adds the class defined in the Button.module.css */}
      {props.children}
    </button>
  );
};

export default Button;
