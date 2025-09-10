import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import CreatePage from './pages/Create'
import UpdatePage from './pages/updatePage'
import ShowBlog from './componets/showBlog'
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
          <Route path='/blog/:id' element ={<ShowBlog />} />
          <Route path='/update/:id' element ={<UpdatePage />} />
        </Routes>
        </div>
    </>
  )
}

export default App
