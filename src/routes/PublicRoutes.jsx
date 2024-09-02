import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/home'
import Footer from '../components/Footer'
import ProjectSection from '../pages/projects'
import Contact from '../pages/contact'
import ClientReview from '../pages/client-review'

const PublicRoutes = ({children}) => {
  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={ <Home/>} />
            </Routes>
            <Routes>
                <Route path='/project' element={ <ProjectSection/>} />
            </Routes>
            <Routes>
                <Route path='/contact' element={ <Contact/>} />
            </Routes>
            <Routes>
                <Route path='/client-feedback' element={ <ClientReview/>} />
            </Routes>
            <Footer/>
        </Router>
    </div>
  )
}

export default PublicRoutes