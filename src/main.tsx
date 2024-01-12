import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import { ModalContextProvider } from "./context/modalContext"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModalContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ModalContextProvider>
  </React.StrictMode>,
)
