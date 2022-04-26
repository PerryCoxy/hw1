import {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import cn from 'classnames';
import Container from '../Container'
import logo from '../../assets/logo.png'

import s from './Header.module.scss'

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

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
            <li><Link to="/">Main</Link></li>
            <li><Link to="/characters">Characters</Link></li>
            <li><Link to="/about">About Game</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </Container>
      </div>
    </header>
  )
};

export default Header;