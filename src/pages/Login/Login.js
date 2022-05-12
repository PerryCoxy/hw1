import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { ReactComponent as IconPen } from './assets/icon-pen.svg';
import Input from '../../components/Input'
import logo from './assets/logo.png';
import s from './Login.module.scss';
import Button from '../../components/Button/Button';



const Login = () => {
  const toggleEl = useRef(null);
  const closeEl = useRef(null);
  const containerEl = useRef(null);

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    repeatePassword: '',
  });

  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (event) => {
    setLoginForm(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    })
    )
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isLogin) delete loginForm.repeatePassword;
    if (loginForm.repeatePassword && loginForm.password !== loginForm.repeatePassword) alert('Пароли не совпадают!');
    console.log('form', loginForm);
    setLoginForm({
      email: '',
      password: '',
      repeatePassword: '',
    });
  };

  useEffect(() => {
    toggleEl.current.addEventListener('click', () => {
      toggleEl.current.classList.add(s.active);
      containerEl.current.classList.add(s.active);
    });

    closeEl.current.addEventListener('click', () => {
      setIsLogin(prevState => !prevState);
      toggleEl.current.classList.remove(s.active);
      containerEl.current.classList.remove(s.active);
    });
  })

  return (
    <>

      <div className={s.header_logo}>
        <img src={logo} alt="logo" />
      </div>

      <div ref={containerEl} className={s.container}>
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
                value={loginForm.email}
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
                value={loginForm.password}
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
          <div ref={toggleEl} className={s.toggle}>
            <IconPen />
          </div>
          <h1 className={s.title}>
            Register
            <div ref={closeEl} className={s.close}></div>
          </h1>

          <form onSubmit={handleSubmit}>
            <div className={s.input_container}>
              <Input
                id="#signup-email"
                type="email"
                required
                name="email"
                label="Email"
                value={loginForm.email}
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
                value={loginForm.password}
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
                value={loginForm.repeatePassword}
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
