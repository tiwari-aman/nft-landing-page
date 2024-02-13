//** File Imports */
import HeroSection from "../../components/home/HeroSection";
import WalletsList from "../../components/home/WalletsList";
import "./style.scss";

const Home = () => {
  return (
    <section className="home" >
      <HeroSection />
      <WalletsList />
    </section>
  );
};

export default Home;
