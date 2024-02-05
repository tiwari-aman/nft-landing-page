import arrow from "../../assets/images/icons/button-arrow-black.svg";

const FeatureDetail = ({ index, data }) => {
  
  const { img, title, subTitle1, subTitle2, order } = data;

  return (
    <div className="row feature-detail">
      <div className={`col-6 feature-img order-${order}`}>
        <img src={img} alt="feature" />
      </div>
      <div className="col-6">
        <div className="feature-content">
          <p className="feature-number">0{index + 1 || ""}.</p>
          <h1 className="feature-title">{title || ""}</h1>
          <p className="feature-sub">{subTitle1 || ""}</p>
          <p className="feature-sub">{subTitle2 || ""}</p>
          <p className="learn-more">
            Learn more <img src={arrow} alt="arrow" width={15} height={15} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetail;
