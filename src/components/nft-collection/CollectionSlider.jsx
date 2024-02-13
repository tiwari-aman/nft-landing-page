//** File Imports */
import CarouselSlider from "../common/CarouselSlider";
import CollectionCard from "./CollectionCard";
import cardImg from "../../assets/images/pages/card-img-1.svg";
import cardImg2 from "../../assets/images/pages/card-img-2.svg";
import cardImg3 from "../../assets/images/pages/card-img-3.svg";
import cardImg4 from "../../assets/images/pages/card-img-4.svg";


const CollectionSlider = () => {
  //** Collection array */
  const data = [
    {
      img: cardImg,
      title: "#Metaverse",
      subtitle: "By TheSalvare",
    },
    {
      img: cardImg2,
      title: "#Polly Doll",
      subtitle: "By TheNative",
    },
    {
      img: cardImg3,
      title: "#Alec Art",
      subtitle: "By GeorgZvic",
    },
    {
      img: cardImg4,
      title: "#Toxic Poeth",
      subtitle: "By YazoiLup",
    },
    {
      img: cardImg,
      title: "#Metaverse",
      subtitle: "By TheSalvare",
    },
    {
      img: cardImg2,
      title: "#Polly Doll",
      subtitle: "By TheNative",
    },
    {
      img: cardImg3,
      title: "#Alec Art",
      subtitle: "By GeorgZvic",
    },
    {
      img: cardImg4,
      title: "#Toxic Poeth",
      subtitle: "By YazoiLup",
    },
    {
      img: cardImg,
      title: "#Metaverse",
      subtitle: "By TheSalvare",
    },
    {
      img: cardImg2,
      title: "#Polly Doll",
      subtitle: "By TheNative",
    },
    {
      img: cardImg3,
      title: "#Alec Art",
      subtitle: "By GeorgZvic",
    },
    {
      img: cardImg4,
      title: "#Toxic Poeth",
      subtitle: "By YazoiLup",
    },
  ];

  return (
    <div className="collection-slider">
      <CarouselSlider
        data={data}
        contentToRender={(props) => <CollectionCard data={props} />}
      />
    </div>
  );
};

export default CollectionSlider;
