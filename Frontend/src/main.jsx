import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Profiles from'./components/Profile/Profiles.jsx'
import LoginPage from './components/Profile/LoginPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Profiles /> */}
    {/* <LoginPage /> */}
  </StrictMode>,
)
