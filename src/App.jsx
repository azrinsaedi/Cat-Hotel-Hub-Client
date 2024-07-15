import { useEffect } from 'react';
import './styles/style.css';
import Aos from 'aos';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage, { loader as MainPageLoader } from './pages/MainPage';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      index: true,
      element: <MainPage />,
      loader: MainPageLoader,
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
