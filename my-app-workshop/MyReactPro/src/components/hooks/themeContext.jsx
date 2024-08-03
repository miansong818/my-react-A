import React, { createContext, useState } from 'react'

export const initState = {
  session: {
    token: 'secret',
    userName: 'Mian'
  },
  getToken: () => initState.session.token
}

const ThemeContext = createContext(initState)

export const ThemeProvider = ({ children }) => {
  const [session, setSession] = useState(initState.session)
  return <ThemeContext.Provider value={{ session, setSession }}>{children}</ThemeContext.Provider>
}

export default ThemeContext
