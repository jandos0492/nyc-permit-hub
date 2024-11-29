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
import CombinationVehiclesPage from "pages/cdl/combinationVehicles/CombinationVehiclesPage";
import CombinationVehiclesLearnPage from "pages/cdl/combinationVehicles/CombinationVehiclesLearnPage";
import AutoEnglishFullTest from "pages/auto/AutoEnglishFullTest";
import AutoEnglishExpressTest from "pages/auto/AutoEnglishExpressTest";
import AutoRussianFullTest from "pages/auto/AutoRussianFullTest";
import AutoRussianExpressTest from "pages/auto/AutoRussianExpressTest";
import GeneralKnowledgeFullTest from "pages/cdl/generalKnowledge/GeneralKnowledgeFullTest";
import AirBrakesFullTest from "pages/cdl/airBrakes/AirBrakesFullTest";
import CombinationVehiclesFullTest from "pages/cdl/combinationVehicles/CombinationVehiclesFullTest";
import GeneralKnowledgeExpressTest from "pages/cdl/generalKnowledge/GeneralKnowledgeExpressTest";
import AirBrakesExpressTest from "pages/cdl/airBrakes/AirBrakesExpressTest";

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
          <Route path="/cdl/combination-vehicles" element={<CombinationVehiclesPage />} />
          <Route path="/cdl/combination-vehicles/learn" element={<CombinationVehiclesLearnPage />} />
          <Route path="/auto/english/full-test" element={<AutoEnglishFullTest />} />
          <Route path="/auto/english/express-test" element={<AutoEnglishExpressTest />} />
          <Route path="/auto/russian/full-test" element={<AutoRussianFullTest />} />
          <Route path="/auto/russian/express-test" element={<AutoRussianExpressTest />} />
          <Route path="/cdl/general-knowledge/full-test" element={<GeneralKnowledgeFullTest />} />
          <Route path="/cdl/general-knowledge/express-test" element={<GeneralKnowledgeExpressTest />} />
          <Route path="/cdl/air-brakes/full-test" element={<AirBrakesFullTest />} />
          <Route path="/cdl/air-brakes/express-test" element={<AirBrakesExpressTest />} />
          <Route path="/cdl/combination-vehicles/full-test" element={<CombinationVehiclesFullTest />} />
        </Routes>
      )}
    </>
  );
}

export default App;
