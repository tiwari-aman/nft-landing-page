const Navlinks = () => {
  const navArr = ["Home", "Collection", "Choose", "About", "Roadmap", "Blog"];

  return (
    <div className="navlinks">
      {navArr.map((item, index) => {
        return (
          <div className="navlink" key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Navlinks;
