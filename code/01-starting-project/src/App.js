import React, { useState, Fragment } from 'react'; // import Fragment so you can use <Fragment> instead of the whole <React.Fragment>

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    // <React.Fragment>, <Fragment>, or <> is a built-in React component that can be an alternative as a wrapper, since JSX requires at least one return
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
// Portal can be used to keep the same structure of how we wrote the content, but the way it is rendered will be different
/* Portals need 2 things:
  1. A place where you want to port the component to
  2. Let the component know that it should have a portal to that place

  These are defined in the /public/index.html
*/