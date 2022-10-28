import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useLocation } from 'react-router-dom';

const Private = ({ allowedRoles }) => {

  const { user } = useAuth();
  const location = useLocation();
  

  return (
  
      user?.roles?.find(role => allowedRoles?.includes(role)) 
        ? <Outlet /> 
        : user?.username
          ? <Navigate to='/unauthorized' state={{ from: location }} replace />
          : <Navigate to='/login' state={{ from: location }} replace />
  )
 

}

export default Private;