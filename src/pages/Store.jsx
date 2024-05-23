import{ React,useEffect} from 'react'
// import {Link} from 'react-router-dom'
import Category from '../components/Category.jsx'
// import Bookbox from '../components/Bookbox.jsx'

const Store = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Category />
      <div className='new-arrival-box' >
        {/* <h1>New Collection</h1> */}
        {/* <div className='inner-featured'>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
          <Link to="/bookDetail"><Bookbox /></Link>
        </div> */}
      </div>

    </>

  )
}

export default Store