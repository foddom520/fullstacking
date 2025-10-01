import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/index.css'
import App from './App.jsx'
import NavbarHome from './Componets/navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarHome />
    <App />
  </StrictMode>,
)
