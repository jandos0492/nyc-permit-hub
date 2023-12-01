// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';
// import LoginFormPage from './components/LoginFormPage';
// import SignupFormPage from './components/SignupFormPage';
// import * as sessionActions from './store/session';
// import Navigation from './components/Navigation';
// import PasswordResetRequest from './components/PasswordResetRequest';
// import ResetPassword from './components/ResetPassword';
// import Home from './components/Home';
// import AutoEnglishHomePage from './components/AutoEnglishHomePage';
// import AutoLearnPage from './components/AutoLearnPage';
// import TrafficSignsPage from './components/TrafficSignsPage';
// import AutoFullTestPage from './components/AutoFullTestPage';
// import AutoExpressTestPage from './components/AutoExpressTestPage';

// function App() {
//   const dispatch = useDispatch();
//   const [isLoaded, setIsLoaded] = useState(false);
//   const isAuthenticated = useSelector((state) => Boolean(state.session.user));

//   useEffect(() => {
//     dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
//   }, [dispatch]);

//   return (
//     <>
//       <Navigation isLoaded={isLoaded} />
//       {isLoaded && (
//         <Routes>
//           {!isAuthenticated && <Route path="/login" element={<LoginFormPage />} />}
//           {!isAuthenticated && <Route path="/signup" element={<SignupFormPage />} />}
//           {!isAuthenticated && <Route path="/reset-password" element={<PasswordResetRequest />} />}
//           {!isAuthenticated && <Route path="/reset-password/:token" element={<ResetPassword />} />}

//           {isAuthenticated && <Route path="/" element={<Home />} />}
//           {isAuthenticated && <Route path="/auto" element={<AutoEnglishHomePage />} />}
//           {isAuthenticated && <Route path="/auto/english/learn" element={<AutoLearnPage />} />}
//           {isAuthenticated && <Route path="/auto/english/traffic-signs/learn" element={<TrafficSignsPage />} />}
//           {isAuthenticated && <Route path="/auto/english/full-test" element={<AutoFullTestPage />} />}
//           {isAuthenticated && <Route path="/auto/english/express-test" element={<AutoExpressTestPage />} />}
//         </Routes>
//       )}
//     </>
//   );
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
import AutoEnglishHomePage from './components/auto/AutoEnglishHomePage';
import AutoLearnPage from './components/auto/AutoLearnPage';
import TrafficSignsPage from './components/auto/AutoTrafficSignsPage';
import AutoFullTestPage from './components/auto/AutoFullTestPage';
import AutoExpressTestPage from './components/auto/AutoExpressTestPage';
import AutoChooseLanguage from './components/auto/AutoChooseLanguage';
import AutoRussianHomePage from './components/auto/AutoRussianHomePage';
import AutoRussianTrafficSignsPage from './components/auto/AutoRussianTrafficSignsPage';
import AutoRussianLearnPage from './components/auto/AutoRussianLearnPage';
import AutoRussianFullTestPage from './components/auto/AutoRussianFullTestPage';

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
          {isAuthenticated && <Route path="/auto/choose-language" element={<AutoChooseLanguage />} />}
          {isAuthenticated && <Route path="/auto/english" element={<AutoEnglishHomePage />} />}
          {isAuthenticated && <Route path="/auto/russian" element={<AutoRussianHomePage />} />}
          {isAuthenticated && <Route path="/auto/english/learn" element={<AutoLearnPage />} />}
          {isAuthenticated && <Route path="/auto/english/traffic-signs/learn" element={<TrafficSignsPage />} />}
          {isAuthenticated && <Route path="/auto/english/full-test" element={<AutoFullTestPage />} />}
          {isAuthenticated && <Route path="/auto/english/express-test" element={<AutoExpressTestPage />} />}
          {isAuthenticated && <Route path="/auto/ru/traffic-signs/learn" element={<AutoRussianTrafficSignsPage />} />}
          {isAuthenticated && <Route path="/auto/ru/learn" element={<AutoRussianLearnPage />} />}
          {isAuthenticated && <Route path="/auto/ru/full-test" element={<AutoRussianFullTestPage />} />}
        </Routes>
      )}
    </>
  );
}

export default App;