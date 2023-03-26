import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // helps us trigger user events in the virtual screen
import Greeting from './Greeting';

// describe allows us to group our tests
describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    // 3 things to do when testing
    // Arrange -> set up the test data, test conditions and environment
    render(<Greeting />);
    // // Act -> run logic that should be tested (e.g. execute fn)
    // no action here
  
    // Assert -> compare execution results w/ expected results
    const helloWorldElement = screen.getByText('Hello World', {exact: false});
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was not clicked', () => {
    render(<Greeting />);

    const outputElement = screen.getByText('It\'s good to see you', {exact: false});
    expect(outputElement).toBeInTheDocument();
  });

  test('render changed if button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText('good to see you', {exact: false});
    expect(outputElement).toBeNull();
  });
}); // globally available function. takes 2 args - description, anonymous fn that contains list of tests