import "./styles/reset.scss";
import "./styles/main.scss";
import { Routes, Route, BrowserRouter } from "react-router";
import OurWorkPage from "./pages/OurWorkPage";
import HomePage from "./pages/HomePage";
import JourneyPage from "./pages/JourneyPage";
import InquiriesPage from "./pages/InquiriesPage";
import Topnav from "./components/Topnav";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Topnav />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/work" element={<OurWorkPage />} />
        <Route path="/inquiries" element={<InquiriesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
