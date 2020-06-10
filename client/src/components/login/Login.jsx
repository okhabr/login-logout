import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {login} from '../../store/auth/actions';
import './Login.css';

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(state => state.auth.loading)

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Please fill in all fields');
    } else {
      dispatch(login({
        email,
        password
      })).then(() => {if (!loading) { history.push("/protected")}})
    }
  };

  return (
    <div>
      <h1 className="login__header">Account Login</h1>
      <form onSubmit={onSubmit} className="login__container">
        <div className="login__item">
          <label>Email Address</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="login__item">
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input
          type='submit'
          value='Login'
        />
      </form>
    </div>
  );
};
