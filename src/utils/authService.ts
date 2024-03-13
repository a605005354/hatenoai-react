// authService.js

// Save user details and token to localStorage
export const saveAuthDetails = (userInfo: { token: string, username: string, email: string }) => {
  if (typeof window !== "undefined") {
    localStorage.setItem('token', userInfo.token);
    localStorage.setItem('username', userInfo.username);
    localStorage.setItem('email', userInfo.email);
  }
};

// Get user details from localStorage
export const getAuthDetails = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    return { token, username, email };
  }
};

// Remove auth details from localStorage (e.g., on logout)
export const clearAuthDetails = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
  }
};
