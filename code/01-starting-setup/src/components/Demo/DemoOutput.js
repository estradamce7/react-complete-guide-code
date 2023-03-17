import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = props => {
  console.log('DemoOutput RUNNING!');
  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
}

// memo is used to tell React to only re-evaluate if props change | only works for functional components
// tells react to looks at the props of this value and compare it to its previous value. if any changes, then will only be re-evaluated
// comparing previous props values to the current props requires it to store it, which is the cost of using React.memo
export default React.memo(DemoOutput);