import React, { useState, useCallback } from 'react'; // useCallback allows us to store a function across component executions

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button'

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING!');
  
  // useCallback returns this stored function and reuse it instead of re-rendering
  // takes 2 args - 1: the function to store, 2: an array of dependencies. leaving it blank/no dependencies always returns the same function object will be re-used when the App re-renders
  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle) {
      setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }
  }, [allowToggle]); // allowToggle as dependency tells React we want to store that function but whenever allowToggle changes with a new value we want to recreate the function and store allowToggle value

  // Function closures: when a function is defined, js locks in all variables that we are using
  // js closes over that constant and stores it for that function definition. meaning, the next time the function is executed, the stored variable (allowToggle) will be used.
  // because useCallback was used in toggleParagraphHandler, the allowToggle value that React stored is still the old value from the first time the App component was executed
  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
// useMemo hook - allows to store any kind of data that you want to store. just like how useCallback does for functions
// useMemo takes 2 args - 1: a function, 2: array of dependencies