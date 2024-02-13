//** Package Imports */
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const FeatureDetail = ({ index, data }) => {
  //**Props destructuring */
  const { img, title, subTitle1, subTitle2, order } = data;

  return (
    <div className="row feature-detail">
      <div className={`feature-img order-${order}`}>
        <img src={img} alt="feature" />
      </div>
      <div className="feature-content">
        <span className="feature-number">0{index + 1 || ""}.</span>
        <h1 className="feature-title">{title || ""}</h1>
        <p className="feature-sub">{subTitle1 || ""}</p>
        <p className="feature-sub">{subTitle2 || ""}</p>
        <p className="learn-more">
          <span>Learn more </span>
          <span>
            <Icon
              icon="material-symbols:arrow-insert"
              className="arrow"
              alt="arrow"
              width={25}
              height={25}
            />
          </span>
        </p>
      </div>
    </div>
  );
};

FeatureDetail.propTypes = {
  index: PropTypes.number,
  data: PropTypes.object,
};

export default FeatureDetail;
