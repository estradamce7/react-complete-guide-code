// Custom redux-like store implementation
// We wil create a custom hook as an alternative to Redux and Context. With this, we can share both logic and data
import { useState, useEffect } from "react";

// define normal variables
// variables that only exist once in the app's lifetime. every module or every other file that imports this file will use the same values stored
// they are outside the hook because if they are used inside the hook, the components that import this custom hook will use their own values
// having these outside, all components will share the same data
let globalState = {};
let listeners = [];
let actions = {};

// useState used in a custom hook, when used will re-render
// if a component uses a custom hook, and it uses useState, the component that uses the custom hook will re-render when useState in that custom hook will re-render
// in this hook we manage all outside/global variables
export const useStore = (shouldListen = true) => {  // shouldListen is added so we can control our global listeners if we want the component to re-render
  const setState = useState(globalState)[1]; // we are only interested in the 2nd value from the state

  const dispatch = (actionIdentifier, payload) => {
    // actionIdentifier will be the key of the action
    const newState = actions[actionIdentifier](globalState, payload);
    // whenever dispatch is called, we update our globalState
    globalState = { ...globalState, ...newState }; // globalState is now everything we had in the previous globalState merged with the newState

    for (const listener of listeners) {
      listener(globalState); // upates this react state with the new global state. this will then re-render the component that's using this custom hook
    }
  };

  // using useEffect means that this effect will only run once for the component that uses this custom hook when it mounts
  // we register 1 listener per component and we unregister it when the component is destroyed
  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState); // every component that use the custom hook will get its own setState function that is added to the shared listeners arr
    }
    // cleanup function | we clear out the listeners of any states that are not present
    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch]; // this is the same as what useReducer is doing
};

// initialize our store
// we are not replacing states and action but we are taking their current state and actions and merging with any new data
export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }

  actions = { ...actions, ...userActions };
};
