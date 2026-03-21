import { Outlet } from 'react-router-dom';
import { Footer } from '../components/footer/Footer.tsx';
import { Header } from '../components/header/Header.tsx';

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
