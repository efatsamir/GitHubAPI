import  { useContext } from 'react'
import { LocaleCtx } from '../contexts/locale';

const useLocale = () => {
  return useContext(LocaleCtx);
  
}

export default useLocale