//** Package Imports */
import PropTypes from "prop-types";

const QualityCard = ({ data }) => {
  const { img, title, description } = data;

  return (
    <div className="quality-card">
      <div className="card-img">
        <img src={img} alt="quality" />
      </div>
      <div className="card-heading">
        <h1>{title}</h1>
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

QualityCard.propTypes = {
  data: PropTypes.object,
};

export default QualityCard;
