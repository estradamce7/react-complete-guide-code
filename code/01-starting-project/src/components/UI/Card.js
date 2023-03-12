import React from "react";

import classes from './Card.module.css'; // css moduie feature needs to import something from that file

const Card = props => {
  return (
    <div className={`${classes.card} ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Card;