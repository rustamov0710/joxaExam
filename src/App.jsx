import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Restaurants from './pages/Restaurants/Restaurants';
import SinglePage from './pages/SinglePage/SinglePage';
import axios from 'axios';

async function getProducts() {
  const response = await axios.get('/restaurant.json');
  return response.data;
}

async function getSingleProduct({ params }) {
  const response = await axios.get('/restaurant.json');
  const data = response.data;
  return data.find((restaurant) => restaurant.id === params.resId);
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Restaurants />,
    loader: getProducts,
  },
  {
    path: '/restaurants/:resId',
    element: <SinglePage />,
    loader: getSingleProduct,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
