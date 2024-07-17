import { useEffect } from 'react';
import './styles/style.css';
import Aos from 'aos';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage, { loader as MainPageLoader } from './pages/MainPage';
import AccountDashboard, {
  loader as accountLoader,
} from './components/AccountDashboard';
import AccountLogin, {
  action as loginAccountAction,
} from './pages/AccountLogin';

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};
checkDefaultTheme();

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      index: true,
      element: <MainPage />,
      loader: MainPageLoader,
    },
    {
      path: 'account',
      children: [
        {
          path: 'dashboard',
          element: <AccountDashboard />,
          loader: accountLoader,
          index: true,
        },
        {
          path: 'login',
          element: <AccountLogin />,
          action: loginAccountAction,
        },
      ],
    },
  ]);

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
