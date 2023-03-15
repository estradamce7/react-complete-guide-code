import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // // this function is executed by react and again after every component re-evaluation. it will only re-run if the dependencies have changed (array, 2nd arg)
  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  //   if (storedUserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;

/**
 * NOTES: main job of react is to evaluate & render jsx code and the dom, manage state & props, reflect input correctly
 * Side effects: everything else that might be happening in your app (ie sending http requests, storing something in browser storage). These tasks must happen outside of the normal component function
 * useReducer: is an alternative/replacement to useState if you need a more powerful useState
 *    useReducer like useState always returns an array with 2 values [state (state snapshot), dispatchFn (function that can be used to dispatch a new action)]
 */

/**
 * useState
 *    main state management tool
 *    great for independend pieces of state/data
 *    great if state updates are easy and limited to a few kinds of updates
 *
 * useReducer
 *    great if you need more power
 *    should be considered if you have related pieces of state/data
 *    can be helpful if you have more complex state updates
 */
