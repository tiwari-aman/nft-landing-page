import RoadmapCard from "./RoadmapCard";

const RoadmapCardContainer = () => {
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
      {cardArr?.map((item, index) => {
        return <RoadmapCard key={index} data={item} index={index} />;
      })}
    </div>
  );
};

export default RoadmapCardContainer;
