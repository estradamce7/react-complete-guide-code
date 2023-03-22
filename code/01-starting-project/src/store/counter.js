import { createSlice } from '@reduxjs/toolkit';
// export const INCREMENT = 'increment';   // one option as constant to use

const initialCounterState = { counter: 0, showCounter: true };

// we are creating a slice of "counter" and setting its initial state to the above const initial state.
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,     // js knows to use this constant as its initial state since name is the same
  reducers: {     // 4 methods because we do have 4 ifs of action.type
    increment(state) {    // automatically calls current state
      state.counter++;    // when using redux toolkit, we cannot accidently manipulate the existing state, so we can use this
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {    // we can still get action, we can omit it if not needed
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

export const counterActions = counterSlice.actions;     // stores all our reducers functions accessible via counterActions.increment, counterActions.decrement ...

export default counterSlice.reducer;