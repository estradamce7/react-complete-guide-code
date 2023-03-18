import { Component } from 'react';

import classes from './User.module.css';

class User extends Component {
  // runs for every component instance if multiple exist in the parent
  componentWillUnmount() {
    console.log("User will unmount");
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>; // "this" is only possible with importing Component
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
