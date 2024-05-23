import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Mainbody from './pages/Mainbody.jsx'
import Store from './pages/Store.jsx'
import BookDetail from './pages/BookDetail.jsx'
import PreviewBook from './pages/PreviewBook.jsx'
import Login from './pages/Login.jsx'
import About from './pages/About.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'



const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Mainbody />} />
          <Route path='/bookDetail/:id' element={<BookDetail />} />
          <Route path='/previewBook' element={<PreviewBook />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;