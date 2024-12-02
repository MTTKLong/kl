import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    
    <GoogleOAuthProvider clientId="904914536933-rn9iprnahvv77p78n2j7stuiinmjfqp9.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
