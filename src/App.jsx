import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import UPManagementPage from "./pages/UPManagementPage";
import ScheduleDemo from "./pages/ScheduleDemo";
import ScrollToTop from "./components/ScrollToTop";

// importing css
import "./styles/Globals.css";
import "./App.css";

function App() {
  
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
          <Route path="/scheduleDemo" element={<ScheduleDemo />} />
          <Route path="/userProfileManagement" element={<UPManagementPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
