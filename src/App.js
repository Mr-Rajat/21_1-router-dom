import {
  createBrowserRouter,
  // createRoutesFromElements, 
  RouterProvider,
  // Route 
} from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products/>}/>
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <Home /> }, // path:''
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetailPage />}
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
