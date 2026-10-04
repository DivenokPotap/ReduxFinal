import { useDispatch } from 'react-redux';
import { AuthLogin } from '@/redux/auth/authOperatins';
import css from './LoginForm.module.css';
export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      AuthLogin({
        username: form.elements.username.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="username" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};