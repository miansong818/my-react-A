import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Article, Brand, CTA, Feature, NavBar } from './components'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'
import { ThemeProvider } from './components/hooks/themeContext'
//commands rafce
function App() {
  const [count, setCount] = useState(0)

  const Context = createContext('Default Value')
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar className='navBar' />
        <Header className='header' />
      </div>
      <h1>My APP</h1>
      <Article className='Article' />

      <Feature className='Feature' />

      <CTA className='CTA' />

      <Brand className='Brand' />
      <Blog className='Blog' />
      <ThemeProvider>
        <Features className='Feature' />
      </ThemeProvider>
    </div>
  )
}

export default App
