import { Global } from '../contexts/global';
import { useContext } from 'react';

const useAuth = () => {
  return useContext(Global);
}

export default useAuth