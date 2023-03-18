import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

// const DUMMY_USERS = [
//   { id: "u1", name: "Max" },
//   { id: "u2", name: "Manuel" },
//   { id: "u3", name: "Julie" },
// ];

class Users extends Component {
  constructor() {
    super(); // required with extending another that calls the constructor of the class we are inherting from
    // For Class-based components: state is always an object, always use "state" if you want to replicate "useState" in functional components
    // All states need to be grouped
    this.state = {
      showUsers: true,
      more: "Test",
    };
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error('No users provided!');
    }
  }

  // functions are now declared outside render()
  toggleUsersHandler() {
    // setState is provided by the Component class. it always takes an object
    // will contain the new state you want to set but will not override the old state, instead it will be merged with the existing state
    this.setState((curState) => {
      return { showUsers: !curState.showUsers }; // funciton can be passed also but structured differently
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    // bind will make "this" keyword inside of toggleUsersHandler method is now set to have the same context/value as the "this" keyword when the code is evaluated. "this" will now refer to the Class
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
