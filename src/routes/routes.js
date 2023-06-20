import App from '../containers/App';
import About from '../views/Category';
import Belt from '../views/Belt';
import Contact from '../views/Contact';
import Home from '../views/Home';
import Sneakers from '../views/Sneakers';
// import Login from '../views/Login'
// import Register from '../views/Register'
export const routes = [
  {
    element: <App />,
    path: '/',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/belt',
        element: <Belt />,
      },
      {
        path: '/sneakers',
        element: <Sneakers />,
      },
      // {
      //   path: '/login',
      //   element: <Login />,
      // },
      // {
      //   path: '/register',
      //   element: <Register />,
      // },
    ],
  },
];
