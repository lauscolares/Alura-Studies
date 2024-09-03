import { createBrowserRouter, Outlet, RouterProvider, useLocation } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Favoritos from './pages/Favoritos/index.jsx';
import Home from './pages/Home/index.jsx';
import Header from './componentes/Header/index.jsx';
import Footer from './componentes/Footer/index.jsx';
import Error404 from './pages/Error404/index.jsx';
import Login from './pages/Login/index.jsx';
import Cadastro from './pages/Cadastro/index.jsx';
import './main.css';
import Perfil from './pages/Perfil/index.jsx';
import Post from './pages/Post/index.jsx';
import { CardProvider } from './context/CardContext.jsx';

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/cadastro';

  return (
    <div>
      <Header showLoginButtons={isLoginPage} />
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
      path: '/login',
      element: <Login />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/favoritos',
      element: <Favoritos />,
    },
    {
      path: '/cadastro',
      element: <Cadastro />,
    },
    {
      path: '/perfil',
      element: <Perfil />,
    },
    {
      path: '/posts/:id',
      element: <Post />,
    },
    {
      path: '*',
      element: <Error404 />,
    },
  ]
}]);

createRoot(document.getElementById('root')).render(
  <CardProvider>
    <RouterProvider router={router} />
  </CardProvider>
)
