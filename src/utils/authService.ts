// authService.js

// Save user details and token to localStorage
export const saveAuthDetails = ({ token, username, email }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
  };
  
  // Get user details from localStorage
  export const getAuthDetails = () => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
  
    return { token, username, email };
  };
  
  // Remove auth details from localStorage (e.g., on logout)
  export const clearAuthDetails = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
  };
  