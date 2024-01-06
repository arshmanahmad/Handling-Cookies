import React from 'react'
import Cookies from 'js-cookie'
import DashBoard from './pages/DashBoardPage/DashBoard'
import LoginPage from './pages/LoginPage/LoginPage'

const App = () => {
  const cookies = Cookies.get("token")

  return (
    <>
      {
        cookies ?
          (<DashBoard />) :
          (<LoginPage />)
      }
    </>

  )
}

export default App