//** File Imports */
import RoadmapCard from "./RoadmapCard";
import MapThrough from "../common/MapThrough";

const RoadmapCardContainer = () => {
  //** Card Array */
  const cardArr = [
    { discount: 0, title: "Planning" },
    { discount: 25, title: "Production" },
    { discount: 50, title: "Launch" },
    { discount: 75, title: "Minting" },
    { discount: 90, title: "New Nfts" },
    { discount: 100, title: "Metaverse" },
  ];

  return (
    <div className="card-container">
      <MapThrough data={cardArr} RenderComponent={RoadmapCard} />
    </div>
  );
};

export default RoadmapCardContainer;
