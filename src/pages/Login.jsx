import React from 'react';
import { useState } from 'react';
import '../components/css/login.css';


const Login = () => {
  const [loginForm, setLoginForm] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleRegister = () => {
    // Handle registration logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const toggleForm = () => {
    setLoginForm(!loginForm);
  };

  return (
    <div className="login-main-box">
      <div className="login-inner-mainbox1">
        <div className="login-container">
          <h2>{loginForm ? 'Login' : 'Sign Up'}</h2>
          <form>
            {!loginForm && <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />}
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {loginForm && <a href="#about">Forgot Password?</a>}
            <button type="button" onClick={loginForm ? handleLogin : handleRegister}>{loginForm ? 'Login' : 'Sign Up'}</button>
          </form>
          <p>{loginForm ? "Don't have an account? " : "Already have an account? "}
            <span className="toggle-link" onClick={toggleForm}>{loginForm ? 'Sign up' : 'Login'}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
