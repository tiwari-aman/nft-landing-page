//** React Imports */
import { useEffect } from "react";

//** File Imports */
import Navbar from "./components/navbar/Navbar";
import Home from "./views/home";
import NfthubCollection from "./views/nfthub-collection";
import WhyChooseUs from "./views/why-choose-us";
import Counts from "./views/counts";
import Features from "./views/features";
import Subscribe from "./views/subscribe";
import Roadmap from "./views/roadmap";
import MeetTheArtists from "./views/meet-the-artists";
import Faq from "./views/faq";
import GetStarted from "./views/get-started";
import Footer from "./views/footer";

function App() {
  
  useEffect(() => {
    // Scroll to the top of the page when the component mounts (page is refreshed)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <NfthubCollection />
      <WhyChooseUs />
      <Counts />
      <Features />
      <Subscribe />
      <Roadmap />
      <MeetTheArtists />
      <Faq />
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
