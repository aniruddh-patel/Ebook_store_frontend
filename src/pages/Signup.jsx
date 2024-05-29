import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';
import '../components/css/Signin.css';
import { Link,Navigate } from 'react-router-dom';
import axios from 'axios'
import { Context } from '..';


const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { isauthenticated, setIsauthenticated, loading ,setLoading } = useContext(Context)


  const submithandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const { data } = await axios.post("http://localhost:5555/user/signup",
        {
          name, email, password,
        },
        {
          headers:
          {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      toast.success(data.message, {
        hideProgressBar: true,
      });
      setIsauthenticated(true)
      setLoading(false)
    } catch (error) {
      toast.error(error.response.data.message, {
        hideProgressBar: true,
      });
      console.log(error)
      setIsauthenticated(false)
      setLoading(false)
    }

  }
  if(isauthenticated)return <Navigate to={"/"}/>
  return (
    <div className="login-main-box">
      <div className="login-inner-mainbox1">
        <div className="login-container">
          <h2>Register</h2>
          <form onSubmit={submithandler}>
            <input type="text" placeholder="Name" value={name} required onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
            <button  disabled={loading} type="submit">Signup</button>
            <h3>or</h3>
            <Link to="/Signin">Sign in</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
