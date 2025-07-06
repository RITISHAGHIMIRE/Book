
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


    {/* <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
    <Outlet/>
    </main>
    <footer>footer</footer>
    <h1 className='text-3xl font-black text-amber-300 font-primary' >hello , tailwind css</h1> */}
    </>
  )
}

export default App;

