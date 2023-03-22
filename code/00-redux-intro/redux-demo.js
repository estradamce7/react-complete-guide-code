// Custom folder and file to test with node js (run note redux-demo.js)
const redux = require('redux');   // default way in node to import a package

const counterReducer = (state = {counter: 0}, action) => {   // reducer always takes 2 args: old state, and dispatched action (fn) | always returns a new state object
  if(action.type === 'increment') {
    // state is undefined because it is the first time it is executed. that's why we need to give state a default value
    return {
      counter: state.counter + 1
    };
  }
  if(action.type === 'decrement') {
    return {
      counter: state.counter - 1
    }
  }

  return state;
};

const store = redux.createStore(counterReducer);    // a method exposed by edux library that creates the store

const counterSubscriber = () => {
  const latestState = store.getState();    // a method available in the store created with createStore. returns latest state snapshot after it was updated
  console.log(latestState);
}

store.subscribe(counterSubscriber);     // subscribe expectes a function, and redux will execute it for us whenever data in the store changes

store.dispatch({ type: 'increment' });     // a method that dispatches an action
store.dispatch({ type: 'decrement' });