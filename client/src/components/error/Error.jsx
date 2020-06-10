import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {login} from '../../store/auth/actions';
import './Error.css';

export const Error = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error)
  const errorStyle = error ? 'error__container_visible' : 'error__container_invisible';

 return (
  <div className={errorStyle}>
    <h2 className="error__text">{error}</h2>
  </div>
 )
}