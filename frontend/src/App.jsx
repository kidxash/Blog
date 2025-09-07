import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import CreatePage from './pages/Create'
import Navbar from './componets/Navbar'
import { useEffect } from 'react'


function App() {
    useEffect(() => {
    document.body.style.backgroundColor = "darksalmon";
    // Optional: remove default margin for full coverage
    document.body.style.margin = "0";
  }, []);


  return (
    <>
    
    
      <Navbar />
      
        <Routes>
          <Route path='/' element ={<HomePage />} />
          <Route path='/create' element ={<CreatePage />} />
        </Routes>
    </>
  )
}

export default App
