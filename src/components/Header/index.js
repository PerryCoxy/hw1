import { useEffect, useState } from 'react';
import cn from 'classnames';
import Container from '../Container'
import logo from '../../assets/logo.png'

import s from './Header.module.scss'

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {

  const [small, setSmall] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setSmall(prevState => window.scrollY > 60);
    })
  });
  return (
    <header className={s.root}>
      <div className={cn(s.header, {
        [s.small]: small,
      })}>
        <Container className={s.container}>
          <div className={s.logo}>
            <img src={logo} alt="logo" className={s.img}/>
          </div>
          <ul className={s.nav}>
            {MENU.map(item => {
              return (
                <li key={item}>
                  <a href="#">
                    {item}
                  </a>
                </li>
              )
            })}
          </ul>
        </Container>
      </div>
    </header>
  )
};

export default Header;