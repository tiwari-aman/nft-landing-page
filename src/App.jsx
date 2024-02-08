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
import Navbar from "./components/home/navbar/Navbar";

function App() {
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
