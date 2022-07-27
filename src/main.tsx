import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <BrowserRouter>
  <BrowserRouter basename="https://gordog-script.vercel.app/">
    <App />
  </BrowserRouter>
)
