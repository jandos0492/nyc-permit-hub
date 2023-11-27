// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import LoginFormPage from './components/LoginFormPage';
// import SignupFormPage from './components/SignupFormPage';
// import * as sessionActions from "./store/session";
// import Navigation from './components/Navigation';
// import PasswordResetRequest from './components/PasswordResetRequest';
// import ResetPassword from './components/ResetPassword';
// import Home from './components/Home';

// function App() {
//   const dispatch = useDispatch();
//   const [isLoaded, setIsLoaded] = useState(false);
//   useEffect(() => {
//     dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
//   }, [dispatch]);

//   const isAuthenticated = useSelector((state) => Boolean(state.session.user));
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isLoaded) {
//       if (isAuthenticated) {
//         navigate("/")
//       } else {
//         navigate("/login")
//       }
//     }
//   })

//   return (
//     <>
//       <Navigation isLoaded={isLoaded} />
//       {isLoaded && (
//         <Routes>
//           {!isAuthenticated && <Route path="/login" element={<LoginFormPage />} />}
//           {!isAuthenticated && <Route path="/signup" element={<SignupFormPage />} />}
//           {!isAuthenticated && <Route path="/reset-password" element={<PasswordResetRequest />} />}
//           {!isAuthenticated && <Route path="/reset-password/:token" element={<ResetPassword />} />}

//           {isAuthenticated && (
//             <Route path="/" element={<Home />} />
//           )}
//         </Routes>
//       )}
//     </>
//   )
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import PasswordResetRequest from './components/PasswordResetRequest';
import ResetPassword from './components/ResetPassword';
import Home from './components/Home';
import AutoEnglishHomePage from './components/AutoEnglishHomePage';
import AutoLearnPage from './components/AutoLearnPage';
import TrafficSignsPage from './components/TrafficSignsPage';
import AutoFullTestPage from './components/AutoFullTestPage';
import AutoExpressTestPage from './components/AutoExpressTestPage';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const isAuthenticated = useSelector((state) => Boolean(state.session.user));

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Routes>
          {!isAuthenticated && <Route path="/login" element={<LoginFormPage />} />}
          {!isAuthenticated && <Route path="/signup" element={<SignupFormPage />} />}
          {!isAuthenticated && <Route path="/reset-password" element={<PasswordResetRequest />} />}
          {!isAuthenticated && <Route path="/reset-password/:token" element={<ResetPassword />} />}

          {isAuthenticated && <Route path="/" element={<Home />} />}
          {isAuthenticated && <Route path="/auto" element={<AutoEnglishHomePage />} />}
          {isAuthenticated && <Route path="/auto/english/learn" element={<AutoLearnPage />} />}
          {isAuthenticated && <Route path="/auto/english/traffic-signs/learn" element={<TrafficSignsPage />} />}
          {isAuthenticated && <Route path="/auto/english/full-test" element={<AutoFullTestPage />} />}
          {isAuthenticated && <Route path="/auto/english/express-test" element={<AutoExpressTestPage />} />}
        </Routes>
      )}
    </>
  );
}

export default App;