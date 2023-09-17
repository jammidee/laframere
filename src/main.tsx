import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

//import './index.css'
//Use bootstrap instead - JMD 09/17/2023
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
