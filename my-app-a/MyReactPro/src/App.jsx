import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Article, Brand, CTA, Feature, NavBar } from './components'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'


//commands rafce
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar className="navBar" />
        <Header className="header" />
      </div>
      <h1>My APP</h1>
      <Article className="Article" />

      <Feature className="Feature" />

      <CTA className="CTA" />

      <Brand className="Brand" />
      <Blog className="Blog" />
      <Features className="Features" />
    </div>
  )
}

export default App
