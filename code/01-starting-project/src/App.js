import { createBrowserRouter, RouterProvider } from 'react-router-dom';   // Alternative way to define routes you need to import: createRoutesFromElements, Route
import ErrorPage from './pages/Error';

import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ProductDetailPage from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,    // acts as a parent route to children routes
    errorElement: <ErrorPage />,      // error page will be routed here with errorElement
    children: [     // path: part after the domain, element: which component will be routed
      { index: true, element: <HomePage />  },    // index turns this route into an index/default route. path: '' can be removed in its place
      { path: 'products', element: <ProductsPage />},
      { path: 'products/:productId', element: <ProductDetailPage />}   // '/products/:productId' this part of the path is dynamic. the part on the colon is an identifier (productId)
    ],
  },
]);

// Alternative way to define routes
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />}/>
//     <Route path='/products' element={<ProductsPage/>} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions)

function App() {
  return <RouterProvider router={router} />;
}

export default App;
