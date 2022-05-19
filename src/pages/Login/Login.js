import cn from 'classnames';
import { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input';
import { ReactComponent as IconPen } from './assets/icon-pen.svg';
import logo from './assets/logo.png';
import s from './Login.module.scss';



const Login = () => {

  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [register, setRegister] = useState({
    email: '',
    password: '',
    repeatePassword: '',
  });

  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (event) => {
    console.log('####: ~ file: Login.js ~ line 30 ~ handleChange ~ isLogin', isLogin);
    if (isLogin) {
      setLogin(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value,
      })
      )
    } else {
      setRegister(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value,
      })
      )
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      console.log('login', login);
      setLogin({
        email: '',
        password: '',
      });
    } else {
      if (register.password !== register.repeatePassword) {
        alert('Пароли не совпадают');
        return;
      }
      console.log('register', register);
      setRegister({
        email: '',
        password: '',
        repeatePassword: '',
      });
    }
  };

  const handleClick = () => {
    setIsLogin(prevState => !prevState);
  }

  return (
    <>

      <div className={s.header_logo}>
        <img src={logo} alt="logo" />
      </div>

      <div
        className={cn(s.container, {
          [s.active]: !isLogin
        })}
      >
        <div className={s.card}></div>
        <div className={s.card}>
          <h1 className={s.title}>Login</h1>

          <form
            onSubmit={handleSubmit}
          >
            <div className={s.input_container}>
              <Input
                id="#email"
                type="email"
                required
                name="email"
                label="Email"
                value={login.email}
                onChange={handleChange}
              />
              <div className={s.bar}></div>
            </div>
            <div className={s.input_container}>
              <Input
                id="#password"
                type="password"
                required
                name="password"
                label="Password"
                value={login.password}
                onChange={handleChange}
              />
              <div className={s.bar}></div>
            </div>
            <div className={s.button_container}>
              <Button
                value="Go"
                color="pink"
              />
            </div>
          </form>

        </div>

        <div className={cn(s.card, s.alt)}>
          <div
            className={cn(s.toggle, {
              [s.active]: !isLogin
            })}
            onClick={handleClick}
          >
            <IconPen />
          </div>
          <h1 className={s.title}>
            Register
            <div
              className={s.close}
              onClick={handleClick}
            ></div>
          </h1>

          <form onSubmit={handleSubmit}>
            <div className={s.input_container}>
              <Input
                id="#signup-email"
                type="email"
                required
                name="email"
                label="Email"
                value={register.email}
                onChange={handleChange}
              />
              <div className={s.bar}></div>
            </div>
            <div className={s.input_container}>
              <Input
                id="#signup-password"
                type="password"
                required
                name="password"
                label="Password"
                value={register.password}
                onChange={handleChange}
              />
              <div className={s.bar}></div>
            </div>
            <div className={s.input_container}>
              <Input
                id="#signup-repeat-password"
                type="password"
                required
                name="repeatePassword"
                label="Repeat password"
                value={register.repeatePassword}
                onChange={handleChange}
              />
              <div className={s.bar}></div>
            </div>
            <div className={s.button_container}>
              <Button
                value="Register"
                color="pink"
              />
            </div>

          </form>
        </div>
      </div>

    </>
  )
}

export default Login;
