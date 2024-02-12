const CollectionCard = ({ props }) => {
  const { img, title, subtitle } = props;

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

export default CollectionCard;
