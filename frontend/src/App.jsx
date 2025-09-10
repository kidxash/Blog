import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import CreatePage from './pages/Create'
import Navbar from './componets/Navbar'
import { useEffect } from 'react'


function App() {
  


  return (
    <>
    
    
      <Navbar />
      <div className='bg-orange-200 pt-20 min-h-screen'>
        <Routes>
          <Route path='/' element ={<HomePage />} />
          <Route path='/create' element ={<CreatePage />} />
        </Routes>
        </div>
    </>
  )
}

export default App
