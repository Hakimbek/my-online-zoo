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
        element: 'about',
      },
      {
        path: 'map',
        element: 'map',
      },
      {
        path: 'zoos',
        element: 'zoos',
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
