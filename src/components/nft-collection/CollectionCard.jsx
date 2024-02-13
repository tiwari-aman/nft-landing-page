//** Package Imports */
import PropTypes from "prop-types";

const CollectionCard = ({ data }) => {
  const { img, title, subtitle } = data;

  return (
    <div className="card">
      <div className="card-body">
        <img src={img} alt="collection" />
        <div className="card-content">
          <h1 className="card-title">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

CollectionCard.propTypes = {
  data: PropTypes.object,
};

export default CollectionCard;
