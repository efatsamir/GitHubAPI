import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Hidden = () => {
  
  const { user }  = useAuth();
 
  return (
      user?.username
        ? <Navigate to='/home' />
        : <Outlet />
        
  )
}

export default Hidden;