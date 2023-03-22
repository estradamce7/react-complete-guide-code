// import { Component } from 'react';    // need to import Component for class-based components
// import { connect } from 'react-redux';  // helps us with connecting to redux store data
// we need to use the useSelector custom hook by React team to get access to the store | for a Class component, import "connect" can be used as a wrapper to the class component to connect the Class component to the store
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
// import { INCREMENT } from "../store";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch(); // useDispatch gives us a dispatch function, no args for useDispatch

  // we need to pass a function to useSelector that will help us extract certain pieces of data from the store
  // React redux will automatically set up a subscription to the Redux store for this component
  // will always update and component will be re-evaluated whenever its data we're are accessing changes
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: INCREMENT }); // type here should be the identifiers we set up in our ../store/index
    dispatch(counterActions.increment());     // dispatch our reducer functions we set in our reducer
  };

  const increaseHandler = () => {
    // dispatch({ type: 'increase', amount: 5 });    // to receive payload, we set the prop "amount" and we need to retrieve that prop in our reducer with action.amount (action.<prop_name>)
    dispatch(counterActions.increase(10));     // redux creates something like this -> { type: SOME_UNIQUE_IDENTIFIER, payload: 10 } - payload is default, we changed our reducer to use action.payload instead
  }
  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());     // dispatch our reducer functions we set in our reducer
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle' });
    dispatch(counterActions.toggleCounter());     // dispatch our reducer functions we set in our reducer
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {

//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//     // .bind is needed to refer onClick props "this" to the "this class"
//   }
// }


// // below are equivalents to using hooks in function-based component
// // we map the states to the prop counter
// const mapStateToProps = state => {
//   return {
//     counter: state.counter    // we bind the counter state to the counter "const"
//   };
// }

// // allows us to use dispatch actions we set
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment '}),
//     decrement: () => dispatch({ type: 'decrement' }),
//   };
// }

// // Class-based component export with redux
// // needs 2 arguments: 1 - the states 2 - the dispatch
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);    // we execute connect and return a new function