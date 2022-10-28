import { createContext, useEffect, useState } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState({});
 

  useEffect(() => {
   setUser( JSON.parse(localStorage.getItem('user')) );
  }, [])
 
  return (
    <Global.Provider value={{ user, setUser }}>
      { children }
    </Global.Provider>
  )
}