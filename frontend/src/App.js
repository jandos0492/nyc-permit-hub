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
import TrafficSignsPageEnglish from "pages/auto/TrafficSignsPages/TrafficSignsPageEnglish";
import TrafficSignsPageRussian from "pages/auto/TrafficSignsPages/TrafficSignsPageRussian";
import AutoEnglishLearn from "pages/auto/AutoEnglishLearn";
import AutoRussianLearn from "pages/auto/AutoRussianLearn";
import CDLPage from "pages/cdl/CDLPage";
import GeneralKnowledgePage from "pages/cdl/generalKnowledge/GeneralKnowledgePage";
import GeneralKnowledgeLearnPage from "pages/cdl/generalKnowledge/GeneralKnowledgeLearnPage";
import AirBrakesPage from "pages/cdl/airBrakes/AirBrakesPage";
import AirBrakesLearnPage from "pages/cdl/airBrakes/AirBrakesLearnPage";

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
          <Route path="/auto/english/traffic-signs" element={<TrafficSignsPageEnglish />} />
          <Route path="/auto/russian/traffic-signs" element={<TrafficSignsPageRussian />} />
          <Route path="/auto/english/learn" element={<AutoEnglishLearn />} />
          <Route path="/auto/russian/learn" element={<AutoRussianLearn />} />
          <Route path="/cdl" element={<CDLPage />} />
          <Route path="/cdl/general-knowledge" element={<GeneralKnowledgePage />} />
          <Route path="/cdl/general-knowledge/learn" element={<GeneralKnowledgeLearnPage />} />
          <Route path="/cdl/air-brakes" element={<AirBrakesPage />} />
          <Route path="/cdl/air-brakes/learn" element={<AirBrakesLearnPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
