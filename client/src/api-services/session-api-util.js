import axios from 'axios';
const postHeaders = new Headers();
postHeaders.append('Content-Type', 'application/json')

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signup = (userData) => {
  return fetch(`${process.env.REACT_APP_HEROKU_URL}users/register`, {
    method: 'POST',
    headers: postHeaders,
    mode: 'cors',
    body: JSON.stringify(userData),
    redirect: 'follow'
  }); 
};


export const login = (userData) => {

  return fetch(`${process.env.REACT_APP_HEROKU_URL}users/api/login`, {
    method: 'POST',
    headers: postHeaders,
    mode: 'cors',
    body: JSON.stringify(userData),
    redirect: 'follow'
  }); 
};