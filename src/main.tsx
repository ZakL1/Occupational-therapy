import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar'
import Head from './components/Head'
import InfoSection from './components/InfoSection'
import Quiz from './components/Quiz'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar />
    <Head />
    <InfoSection />
    <Quiz />
  </React.StrictMode>,
)
