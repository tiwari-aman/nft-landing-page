import avatar1 from "../../../assets/images/logos/avatar-1.svg";
import avatar2 from "../../../assets/images/logos/avatar-2.svg";
import avatar3 from "../../../assets/images/logos/avatar-3.svg";

const AvatarRating = () => {
  const avatarArr = [ avatar3, avatar2, avatar1];

  return (
    <div className="rating-section">
      <div className="avatar-container">
        {avatarArr.map((item, index) => {
          return (
            <img
              className="avatar"
              key={index}
              src={item}
              alt="avatar"
              width={48}
              height={48}
            />
          );
        })}
      </div>
      <div className="rating-content">
        <h2>47K+</h2>
        <p>Community members</p>
      </div>
    </div>
  );
};

export default AvatarRating;
