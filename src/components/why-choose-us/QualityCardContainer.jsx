import React from "react";
import QualityCard from "./QualityCard";
import wcu1 from "../../assets/images/icons/wcu1.svg";
import wcu2 from "../../assets/images/icons/wcu2.svg";
import wcu3 from "../../assets/images/icons/wcu3.svg";
import wcu4 from "../../assets/images/icons/wcu4.svg";

const QualityCardContainer = () => {
  const cardArr = [
    {
      img: wcu1,
      title: "Huge collection",
      description:
        " A collection of 890 unique Nerkos built to go beyond the digital space.",
    },
    {
      img: wcu2,
      title: "High quality",
      description:
        "The nerko’s collection includes dozens of rare costumes ands colorways of artist's.",
    },
    {
      img: wcu3,
      title: "Top resource",
      description:
        " Tasty design resources made with care for each pixel. NFTs and game resources.",
    },
    {
      img: wcu4,
      title: "Big community",
      description:
        " Be part of a community of nerko owners and create user generated items.",
    },
  ];

  return (
    <div className="card-container">
      {cardArr?.map((card) => {
        return <QualityCard key={card.title} data={card} />;
      })}
    </div>
  );
};

export default QualityCardContainer;
