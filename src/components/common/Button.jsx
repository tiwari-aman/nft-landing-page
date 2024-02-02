import arrow from "../../assets/images/icons/button-arrow.svg";
const Button = ({ label }) => {
  return (
    <button className="primary-btn">
      {label || ""} <img src={arrow} alt="arrow" />
    </button>
  );
};

export default Button;
