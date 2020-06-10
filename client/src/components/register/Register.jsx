import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import './Register.css';

import {register} from '../../store/auth/actions';

export const Register = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const loading = useSelector(state => state.auth.loading)
  
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const {name, email, password, password2} = user;
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      alert('Please enter all fields');
    } else if (password !== password2) {
      alert('Passwords do not match');
    } else {
      dispatch(register({
        name,
        email,
        password
      })).then(() => {if (!loading) { 
        history.push("/protected")
      }})
    }
  };

  return (
    <div>
      <h1 className="register__header">Register</h1>
      <form onSubmit={onSubmit} className="register__container">
        <div className="register__container">
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="register__container">
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="register__container">
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <div className="register__container">
          <label htmlFor='password2'>Confirm Password</label>
          <input
            id='password2'
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <input
          type='submit'
          value='Register'
        />
      </form>
    </div>
  );
};
