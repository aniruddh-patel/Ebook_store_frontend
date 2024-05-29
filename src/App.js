import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Mainbody from './pages/Mainbody.jsx'
import Store from './pages/Store.jsx'
import BookDetail from './pages/BookDetail.jsx'
import PreviewBook from './pages/PreviewBook.jsx'
import Signup from './pages/Signup.jsx'
import Signin from './pages/Signin.jsx'
import About from './pages/About.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import axios from 'axios'
import { Context } from './index.js'
const App = () => {
  const { setIsauthenticated,setUser } = useContext(Context)

  useEffect(()=>{
    axios.get("http://localhost:5555/user/me",{
      withCredentials:true
    }).then(res=>{
      setUser(res.data.user)
      setIsauthenticated(true)
    }).catch((error)=>{
      setUser({})
      setIsauthenticated(false)
    })
  },[])

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
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;