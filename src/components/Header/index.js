import {useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import cn from 'classnames';
import Container from '../Container'
import logo from '../../assets/logo.png'

import s from './Header.module.scss'

const MENU = [
  {
    title: 'Main',
    href: '/',
  }, {
    title: 'Characters',
    href: '/characters',
  }, {
    title: 'About',
    href: '/about',
  }, {
    title: 'Contacts',
    href: '/contacts',
  },
];

const Header = () => {
  const navigate = useNavigate();
  const [small, setSmall] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setSmall(prevState => window.scrollY > 60);
    })
  }, []);

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className={s.root}>
      <div className={cn(s.header, {
        [s.small]: small,
      })}>
        <Container className={s.container}>
          <div className={s.logo} onClick={handleLogoClick}>
            <img src={logo} alt="logo" className={s.img}/>
          </div>
          <ul className={s.nav}>
            {
              MENU.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.href}
                    className={ ({isActive}) => {
                      return isActive ? s.active : null;
                    }}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </Container>
      </div>
    </header>
  )
};

export default Header;