import React from 'react';
import {useSelector} from 'react-redux';

import './Protected.css';

export const Protected = () => {
const name = useSelector(state => state.auth.user.name);

 return (
      <h1 className="dashboard__header">
          {name ? `Hello there, ${name}` : `Loading` }
      </h1>
 )
};
