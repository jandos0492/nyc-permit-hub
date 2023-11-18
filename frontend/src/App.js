import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from "./store/session";
import Navigation from './components/Navigation';
import PasswordResetRequest from './components/PasswordResetRequest';
import ResetPassword from './components/ResetPassword';
import Example from './components/Example';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Routes>
          <Route path="/" element={<Example />} />
          <Route path="/login" element={<LoginFormPage />} />
          <Route path="/signup" element={<SignupFormPage />} />
          <Route path="/reset-password" element={<PasswordResetRequest />} /> 
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      )}
    </>
  )
}

export default App;