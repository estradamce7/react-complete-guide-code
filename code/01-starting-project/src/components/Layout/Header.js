import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpg'; // importing an image is similar to importing a css
import classes from './Header.module.css';

const Header = (props) => {
  return <Fragment>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}> {/* main-image written different because of the dash (-) */}
      <img src={mealsImage} alt="A table full of delicious food!" />
    </div>
  </Fragment>;
};

export default Header;
