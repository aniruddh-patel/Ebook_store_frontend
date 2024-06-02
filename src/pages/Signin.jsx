import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import '../components/css/Signin.css';
import { Link, Navigate } from 'react-router-dom';
import { Context } from '..';
import axios from 'axios';
import { toast } from 'react-toastify';


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isauthenticated, setIsauthenticated, loading, setLoading } = useContext(Context)
  const submithandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const { data } = await axios.post("http://localhost:5555/user/signin",
        {
          email, password,
        },
        {
          headers:
          {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      toast.success(data.message);
      setIsauthenticated(true)
      setLoading(false)
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error)
      setIsauthenticated(false)
      setLoading(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (isauthenticated) return <Navigate to={"/"} />
  return (
    <div className="login-main-box">
      <div className="login-inner-mainbox1">
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={submithandler}>
            <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
            <button disabled={loading} type="submit">Login</button>
            <h3>or</h3>
            <Link to="/Signup">Sign up</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
