
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { GiHoneyJar } from 'react-icons/gi'
import Home from './pages/home/Home'

import Footer from './components/Footer'


function App() {
 

  return (
    <>
    
    <Navbar/>
   
    <Home/>
<Footer/>


  
    </>
  )
}

export default App;

