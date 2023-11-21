import React from 'react'
import ReactDOM from 'react-dom/client'
//import './styles.css'
import {BarberApp} from './BarberApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <BarberApp />
    </BrowserRouter>
  </React.StrictMode>,
)
