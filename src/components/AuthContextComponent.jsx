import React, { useState, useEffect } from 'react'
import { createContext } from 'react'

export const authContext = createContext(null)

export default function AuthContextComponent({children}) {
    const [authUser, setAuthUser] = useState(null)
    const [authUserToken, setAuthUserToken] = useState(null)
    useEffect(() => {
        if (authUser && authUserToken) {
          localStorage.setItem('currentUser', JSON.stringify(authUser, authUserToken));
          localStorage.setItem('token', JSON.stringify(authUserToken))
        } else if(!authUserToken){
            console.log('Token expired')
        // //   localStorage.removeItem('currentUser');
        }
      }, [authUser, authUserToken]);
  return (
    <authContext.Provider value={{authUser, setAuthUser, authUserToken, setAuthUserToken}}>
        {children}
    </authContext.Provider>
  )
}
