import Container from '../Container'
import logo from '../../assets/logo.png'

import style from './Header.module.css'

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
  return (
    <header className={style.root}>
      <div className={style.header}>
        <Container className={style.container}>
          <div className={style.image}>
            <img src={logo} alt="logo" className={style.logo}/>
          </div>
          <ul className={style.nav}>
            {MENU.map(item => {
              return (
                <li>
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