//** Package Imports */
import PropTypes from "prop-types";
import MapThrough from "../common/MapThrough";

const Navlinks = ({ setShow, show }) => {
  //** Link Array */
  const navArr = ["Home", "Collection", "Choose", "About", "Roadmap", "Team"];

  /**
   * Scrolls to the element with the specified id.
   *
   * @param {string} id - The id of the element to scroll to
   */
  const ScrollToId = (id) => {
    if (show) {
      setShow(!show);
      document.body.style.overflow = "unset";
    }

    const element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="navlinks">
      <MapThrough
        data={navArr}
        RenderComponent={({ data, index }) => (
          <div className="navlink" key={index} onClick={() => ScrollToId(data)}>
            {data}
          </div>
        )}
      />
    </div>
  );
};

Navlinks.propTypes = {
  setShow: PropTypes.func,
  show: PropTypes.bool,
};

export default Navlinks;
