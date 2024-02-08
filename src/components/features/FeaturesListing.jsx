import feat1 from "../../assets/images/pages/feat1.svg";
import feat2 from "../../assets/images/pages/feat2.svg";
import feat3 from "../../assets/images/pages/feat3.svg";
import FeatureDetail from "./FeatureDetail";
import SectionDivider from "../common/SectionDivider";

const FeaturesListing = () => {
  const featuresArr = [
    {
      img: feat1,
      title: "Setup and connect your wallet.",
      subTitle1:
        "Use Trust Wallet, Metamask or any wallet to connect to multiple chains the app.",
      subTitle2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Metamask or any wallet ipsam temporibus.",
      order: 1,
    },
    {
      img: feat2,
      title: "Create your own digital artwork",
      subTitle1:
        "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artwork's & digital artwork.",
      subTitle2:
        "Starting the production on the procedurally generated planets and the smart contract for minting.",
      order: 2,
    },
    {
      img: feat3,
      title: "Choose a platform to sell your NFT",
      subTitle1:
        "Earn ETH and BIT for all your NFTs that you sell on our marketplace.",
      subTitle2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Metamask or any wallet ipsam temporibus.",
      order: 1,
    },
  ];

  return (
    <div className="features-list">
      {featuresArr.map((item, index) => {
        return <FeatureDetail key={index} data={item} index={index} />;
      })}
    </div>
  );
};

export default FeaturesListing;
