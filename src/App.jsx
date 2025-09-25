import { React } from 'react'
import Welcome from './components/Welcome.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
export const App = () => {
  return (
    <div className="h-screen bg-stone-900">
      <Welcome/>
      <Navbar/>
      <About/>

    </div>
  )
}

export default App
