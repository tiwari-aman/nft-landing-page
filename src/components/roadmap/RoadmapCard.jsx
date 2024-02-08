const RoadmapCard = ({ data, index }) => {

    const {discount, title} = data;

  return (
    <div className="card">
      <div className="card-header">
        <p className="phase">Phase 0{index + 1}</p>
        <div className="discount">
          <span className="discount-value">
            {discount || 0}
            <span className="discount-percent">%</span>
          </span>
          
        </div>
      </div>
      <div className="card-body">
        <h1>{title || ""}</h1>
        <p className="desc">
          Quality comes first. we took our time to plan out everything and build
          our production pipeline for a good quality artworks.
        </p>
      </div>
      <hr className="divider" />
      <div className="card-footer">
        <p>Release website and logo</p>
        <p>Grow community</p>
        <p>Launch the project</p>
      </div>
    </div>
  );
};

export default RoadmapCard;
