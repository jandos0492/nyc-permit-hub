import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import HomePage from "pages/HomePage";
import AutoChooseLanguage from "pages/auto/AutoChooseLanguage";
import AutoEnglish from "pages/auto/AutoEnglish";
import * as sessionActions from "./store/session";
import AutoRussian from "pages/auto/AutoRussian";
import TrafficSignsPage from "pages/auto/LearnTrafficSigns";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/auto/choose-language" element={<AutoChooseLanguage />} />
          <Route path="/auto/english" element={<AutoEnglish />} />
          <Route path="/auto/russian" element={<AutoRussian />} />
          <Route path="/auto/english/traffic-signs" element={<TrafficSignsPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
