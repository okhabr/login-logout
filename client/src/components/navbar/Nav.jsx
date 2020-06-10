import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';

import './Nav.css'; 
import {logout, loadUser} from '../../store/auth/actions'

export const Navbar = () => {
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logout())
  useEffect(() => {
    dispatch(loadUser());
  },[])

  return (
    <nav>
      <ul className="navbar__container">
      <Link to='/protected' className="navbar__item">Your dashboard</Link>
        {!isLoggedIn ? (
          <div>
          <Link to='/login' className="navbar__item">Login</Link>
          <Link to='/register' className="navbar__item">Register</Link>
          </div>
        ) : <button className="navbar__item"onClick={handleLogOut}>Log Out</button>}
        </ul>
    </nav>
  )
  }
