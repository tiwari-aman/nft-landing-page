import { useEffect } from "react";
import HeroSection from "../../components/home/hero-section/HeroSection";
import WalletsList from "../../components/home/hero-section/WalletsList";
import Navbar from "../../components/home/navbar/Navbar";
import "../home/style.scss";

const Home = () => {
  return (
    <section className="home">
      <Navbar />
      <HeroSection />
      <WalletsList />
    </section>
  );
};

export default Home;
