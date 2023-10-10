import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ContextProvider from './context/ContextProvider'
import UserProvider from './context/userContext/UserProvider'
import DashBoardProvider from './context/dashBoard/DashBoardProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <UserProvider>
      <ContextProvider>
        <DashBoardProvider>
          <App />
        </DashBoardProvider>
      </ContextProvider>
    </UserProvider>
  </React.StrictMode>,
)
