import Favoritos from './pages/Favoritos/index.jsx';
import Home from './pages/Home/index.jsx';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Header from './componentes/Header/index.jsx';
import Footer from './componentes/Footer/index.jsx';
import Error404 from './pages/Error404/index.jsx';
import './main.css';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/favoritos',
      element: <Favoritos />,
    },
    {
      path: '*',
      element: <Error404 />,
    },
  ]
}]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>,
  )
