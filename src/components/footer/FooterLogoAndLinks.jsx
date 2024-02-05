import logo from "../../assets/images/logos/nft-gradient-logo.svg";

const FooterLogoAndLinks = () => {
  return (
    <div className="footer-content">
      <div className="company-details">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <p className="desc">
          Join our Discord channel or follow us on Twitter to keep up to date
          with our latest work and announcements.
        </p>
        <p>social icons</p>
      </div>
      <div className="links-container">
        <div className="links-1">
          <h3>Quick links</h3>
          <ul>
            <li>About</li>
            <li>Collection</li>
            <li>Roadmap</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="links-2">
          <h3>Community</h3>
          <ul>
            <li>How it works!</li>
            <li>Blockchain</li>
            <li>Get in touch</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterLogoAndLinks;
