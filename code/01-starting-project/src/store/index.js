// import { createStore, combineReducers } from 'redux'; // you can import specific things from redux library with { creatStore } (to use createStore function)
import { configureStore } from '@reduxjs/toolkit';    // we can remove redux from the package.json since redux toolkit already includes it
// configureStore is like createStore

import counterReducer from './counter';
import authReducer from './auth';


// import configureStore to set up your store const using redux toolkit
// if we have multiple slices, we only have/need to run configureStore once and only has one reducer
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }    // we can create a map of reducers this way, then this is set as values to the "main" reducer. configureStore will then merge all these stores into one
});    // (counterSlice.reducer);


export default store;   // export the store, not counterReducer

// below is a way if no redux toolkit installed
// const counterReducer = (state = initialState, action) => {
//   // redux won't merge changes with the existing state, instead it takes what you return and replaces the existing state with it
//   // Important: Reducer always returns a brand new snapshot/state object which redux will use to replace its existing state with. they will overwrite the existing state
//   if(action.type === INCREMENT) {
//     // // objects and arrays are reference values in js
//     // state.counter++;   // never mutate/change the existing state. instead always overwrite it with a brand new object/state
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter    // set as the existing showCounter value
//     }
//   }
  
//   if(action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,    // action payload allows us to dynamically receive input/data by action.<prop_name>
//       showCounter: state.showCounter
//     }
//   }

//   if(action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     }
//   }

//   if(action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,    // reverse of the current existing showCounter state
//       counter: state.counter    // keep the existing counter state
//     }
//   }
  
//   return state;
// }
