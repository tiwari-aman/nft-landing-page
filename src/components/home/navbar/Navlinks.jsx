const Navlinks = ({ setShow, show }) => {
  const navArr = ["Home", "Collection", "Choose", "About", "Roadmap", "Team"];

  const ScrollToId = (id) => {
    if(show){
      setShow(!show)
      document.body.style.overflow = "unset";
    }
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
