import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context = createContext({ isauthenticated: false })

const AppWrapper = () => {
  const[isauthenticated,setIsauthenticated]=useState(false);
  const[loading,setLoading]=useState(false);
  const[user,setUser]=useState({});

  return(
  <Context.Provider value={{isauthenticated,setIsauthenticated,loading,setLoading,user,setUser}} >
    <App />
    <ToastContainer style={{ background: "transparent" }} />
  </Context.Provider>
  ) 
}

root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

