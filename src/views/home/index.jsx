import HeroSection from "../../components/home/hero-section/HeroSection";
import WalletsList from "../../components/home/hero-section/WalletsList";
import Navbar from "../../components/home/navbar/Navbar";
import "../home/style.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <WalletsList />
    </div>
  );
};

export default Home;
