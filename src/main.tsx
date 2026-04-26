import './i18n';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { Contact } from './components/contact/Contact.tsx';
import { Map } from './components/map/Map.tsx';
import { About } from './components/about/About.tsx';
import { Zoo } from './components/zoo/Zoo.tsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/about" replace />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'map',
        element: <Map />,
      },
      {
        path: 'zoos',
        element: <Zoo />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
