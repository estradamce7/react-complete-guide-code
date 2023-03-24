import { NavLink } from "react-router-dom"; // Same to Link but if you add className prop to it, it takes it as a function which should return the className to be added.

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={(isActive) => (isActive ? classes.active : undefined)}
              // style={({isActive}) => ({})}     // this can also be used
              end     // end = lets this link considered to be active if url ends with '/'
            >
              Home
            </NavLink>{" "}
            {/* isActive is a bool provided by react-router-dom */}
          </li>
          <li>
            <NavLink
              to="/products"
              className={(isActive) => (isActive ? classes.active : undefined)}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
