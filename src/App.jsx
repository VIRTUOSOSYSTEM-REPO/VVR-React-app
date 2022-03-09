import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
// import { Features } from "./components/features";s
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { CCTV } from "./components/CCTV";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { Why } from "./components/why";
import { FIREDETECTION } from "./components/FireDetection";
import { SALES } from "./components/Sales";
import "./App.css";
import WhatsApp from "./WhatsApp/WhatsApp";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      {/* <Why data={landingPageData.Why} /> */}
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/>
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <CCTV data={landingPageData.CCTV} />
      <FIREDETECTION data={landingPageData.Firedetection} />
      <SALES data={landingPageData.Sales} />
      <Contact data={landingPageData.Contact} />
      {/* <ProfilePage /> */}
      <WhatsApp />
    </div>
  );
};

export default App;
