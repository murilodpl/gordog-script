import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import './assets/css/style.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="https://gordog-script.vercel.app">
  {/* <BrowserRouter> */}
    <App />
  </BrowserRouter>
)
