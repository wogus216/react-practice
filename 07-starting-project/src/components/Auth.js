import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.login);

  const loginHandler = (event) => {
    event.preventDefault(); //새로고침 방지
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
