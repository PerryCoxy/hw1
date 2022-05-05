import { useEffect } from 'react';
import { Outlet, useLocation, useMatch } from 'react-router-dom';
import Container from "../Container";
import Footer from "../Footer";
import Header from "../Header";
import s from "./Layout.module.scss";


const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const match = useMatch({ path: '/' })
  return (
    <>
      <Header />
      {
        match
          ? <Outlet />
          : (
            <div className={s.container}>
              <Container>
                <Outlet />
              </Container>
            </div>
          )
      }
      <Footer />
    </>
  );
};

export default Layout;