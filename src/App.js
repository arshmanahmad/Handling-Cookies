import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import DashBoard from './pages/DashBoardPage/DashBoard'
import LoginPage from './pages/LoginPage/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  const enteredName = Cookies.get("name");
  const enteredPassword = Cookies.get("password");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path="/" element={enteredName && enteredPassword ? (<DashBoard tokenName={enteredName} />) : (<LoginPage />)} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App