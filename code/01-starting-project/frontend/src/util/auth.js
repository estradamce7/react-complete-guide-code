import { redirect } from 'react-router-dom';

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);  // get expiration date to Date format
  const now = new Date(); // get today's time in ms (miliseconds)
  const duration = expirationDate.getTime() - now.getTime();  // calculate the duration left by checking expirationDate's time in ms
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem('token');

  if(!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();
  
  if(tokenDuration < 0) {
    return 'EXPIRED';
  }

  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth');
  }
}