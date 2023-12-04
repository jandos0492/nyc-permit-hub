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
import AutoRussianExpressTestPage from './components/auto/AutoRussianExpressTestPage';
import CDLHomePage from './components/CDL/CDLHomePage';
import CDLGeneralKnowledgeHomePage from './components/CDL/CDLGenaralKnowledgeHomePage';
import CDLGeneralKnowledgeLearnPage from './components/CDL/CDLGeneralKnowledgeLearnPage';
import CDLGeneralKnowledgeFullTestPage from './components/CDL/CDLGeneralKnowledgeFullTestPage';
import CDLGeneralKnowledgeExpressTestPage from './components/CDL/CDLGeneralKnowledgeExpressTestPage';
import CDLAirBrakesHomePage from "./components/CDL/CDLAirBrakesHomePage";
import CDLAirBrakesLearnPage from './components/CDL/CDLAirBrakesLearnPage';
import CDLAirBrakesFullTestPage from './components/CDL/CDLAirBrakesFullTestPage';
import CDLAirBrakesExpressTestPage from './components/CDL/CDLAirBrakesExpressTestPage';
import CDLCombinationVehicles from './components/CDL/CDLCombinationVehiclesHomePage';
import CDLCombinationVehiclesLearnPage from './components/CDL/CDLCombinationVehiclesLearnPage';
import CDLCombinationVehiclesFullTestPage from './components/CDL/CDLCombinationVehiclesFullTestPage';
import CDLCombinationVehiclesExpressTestPage from './components/CDL/CDLCombinationVehiclesExpressTestPage';

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
          {isAuthenticated && <Route path="/auto/ru/express-test" element={<AutoRussianExpressTestPage />} />}
          {isAuthenticated && <Route path="/cdl" element={<CDLHomePage />} />}
          {isAuthenticated && <Route path="/cdl/general-knowledge" element={<CDLGeneralKnowledgeHomePage />} />}
          {isAuthenticated && <Route path="/cdl/general-knowledge/learn" element={<CDLGeneralKnowledgeLearnPage />} />}
          {isAuthenticated && <Route path="/cdl/general-knowledge/full-test" element={<CDLGeneralKnowledgeFullTestPage />} />}
          {isAuthenticated && <Route path="/cdl/general-knowledge/express-test" element={<CDLGeneralKnowledgeExpressTestPage />} />}
          {isAuthenticated && <Route path="/cdl/air-brakes" element={<CDLAirBrakesHomePage />} />}
          {isAuthenticated && <Route path="/cdl/air-brakes/learn" element={<CDLAirBrakesLearnPage />} />}
          {isAuthenticated && <Route path="/cdl/air-brakes/full-test" element={<CDLAirBrakesFullTestPage />} />}
          {isAuthenticated && <Route path="/cdl/air-brakes/express-test" element={<CDLAirBrakesExpressTestPage />} />}
          {isAuthenticated && <Route path="/cdl/combination-vehicles" element={<CDLCombinationVehicles />} />}
          {isAuthenticated && <Route path="/cdl/combination-vehicles/learn" element={<CDLCombinationVehiclesLearnPage />} />}
          {isAuthenticated && <Route path="/cdl/combination-vehicles/full-test" element={<CDLCombinationVehiclesFullTestPage />} />}
          {isAuthenticated && <Route path="/cdl/combination-vehicles/express-test" element={<CDLCombinationVehiclesExpressTestPage />} />}
        </Routes>
      )}
    </>
  );
}

export default App;