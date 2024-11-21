import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PackageInfo from "./Components/PackageInfo/PackageInfo";
import CancellationPolicy from "./Components/Policies/CancellationPolicy";
import TermsCondition from "./Components/Policies/TermsConditions";
import PawanaCamping from "./Components/Camping/Pawana";
import ScrollToTop from "./Components/HomePage/ScrollToTop";
import { Layout } from "./Components/Layout";
import PanshetCamping from "./Components/Camping/Panshet";
// // import ImageCarousel from "./Components/Camping/ImageCarousel";
// import ContactUs from "./Components/ContactUs";
import ContactChatIcon from "./Components/HomePage/ContactChatIcon";
import ServicesData from "./Components/ServicesData";
import ImageCard from "./Components/ImageCard";
import ImageCardsWithverticalView from "./Components/PackageInfo/ImageCardsWithverticalView"; 



function App() {
  return (
    <div>
      <Router>
      <ScrollToTop/>
      <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<HomePage/>} />
        <Route path="/learn-more" element={<PackageInfo/>} />
        <Route path="/cancellation-policy" element={<CancellationPolicy/>} />
        <Route path="/terms-conditions" element={<TermsCondition/>} />
        <Route path="/pawana-camping" element={<PawanaCamping/>} />
        <Route path="/panshet-camping" element={<PanshetCamping/>} />
        <Route path="/gallery" element={<ImageCardsWithverticalView/>} />
        {/* <Route path="/contact-us" element={<ContactUs/>} /> */}
        <Route path="/camping" element={<ImageCard/>} />
        <Route path="/services" element={<ServicesData/>} />
        </Route>
      </Routes>
      <ScrollToTop/>
      <ContactChatIcon/>
    </Router>
    </div>
  );
}

export default App;
