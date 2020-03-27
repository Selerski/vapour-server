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
  return fetch("https://whispering-ocean-93586.herokuapp.com/users/register", {
    method: 'POST',
    headers: postHeaders,
    mode: 'cors',
    body: JSON.stringify(userData),
    redirect: 'follow'
  }); 
};


export const login = (userData) => {

  return fetch("https://whispering-ocean-93586.herokuapp.com/users/api/login", {
    method: 'POST',
    headers: postHeaders,
    mode: 'cors',
    body: JSON.stringify(userData),
    redirect: 'follow'
  }); 
};