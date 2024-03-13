import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './authContext';

interface RequireAuthProps {
  children: React.ReactNode;
}

function RequireAuth({ children }: RequireAuthProps) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
