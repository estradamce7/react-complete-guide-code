import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();   // triggers navigation action/go to different route

  // programmatic imperative navigation code, not ideal
  function navigateHandler() {
    navigate('/products');
  }

  return (
    <>
      <h1>This is the home page</h1>
      <p>
        Go to <Link to='products'>the list of products</Link> page
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
