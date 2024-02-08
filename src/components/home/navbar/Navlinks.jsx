const Navlinks = () => {
  const navArr = ["Home", "Collection", "Choose", "About", "Roadmap", "Team"];

  const ScrollToId = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="navlinks">
      {navArr.map((item, index) => {
        return (
          <div className="navlink" key={index} onClick={() => ScrollToId(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Navlinks;
