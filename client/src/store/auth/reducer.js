import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
  } from '../types';
  
  const initialState = {
    token: null,
    isAuthenticated: false,
    user: {
      name: ''
    },
    error: null,
    loading: false
  };

  export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          error: null,
          loading: false
        };
    
      case LOGIN_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          error: null,
          loading: true
        };

      case AUTH_ERROR:
         return {
          ...state,
          error: action.payload,
          loading: false
        };
      
        case REGISTER_SUCCESS:
          localStorage.setItem('token', action.payload.token);
          return {
            ...state,
            error: null,
            loading: true
          }
       
        case REGISTER_FAIL:
          return {
           ...state,
           error: action.payload,
           loading: false
           };

         case LOGIN_FAIL:
          return {
             ...state,
             error: action.payload,
             loading: false
            };

      case LOGOUT:
        localStorage.removeItem('token');
        return {...initialState};

      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
          loading: false
        };

      default:
        return state;
    }
  };