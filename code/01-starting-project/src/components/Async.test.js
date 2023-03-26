import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => { // we can add async here if what we are testing for returns a promise
    // Arrange
    // create a mock function that does the fetching for us to avoid sending data to the server
    window.fetch = jest.fn();
    // here, we are overriding the built-in fetch fn with our dummy fetch fn where we set the actual value this promise should return
    // we are simulating this success case here. so no requests are sent to the server
    window.fetch.mockResolvedValueOnce({ // allows us to set a value this fetch fn should resolve to when it is being called. this should resolve to an object
      json: async () => [{ id: 'p1', title: 'First post' }]
    });
    render(<Async />);

    // // Act
    // N/A

    const listItemElements = await screen.findAllByRole('listitem');
    // findAllByRole checks for the promise returned, which waits for the listitem to render. it gets repeatedly checked
    // getAllByRole allows us to checks if there are list items for this test
    expect(listItemElements).not.toHaveLength(0); // allows us to check length of arr or <li> in this case
  });
});

// Note: we should not do tests when it makes requests to a server
// Rather, we can test the component if it behaves correctly