import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="upper-footer">
          <div className="foot">
            <div className="footer-1">
              <div className="logo-contacts">
                <img
                  src="/img/hospital-logo.png"
                  alt="hospital-search-logo"
                  height="50"
                  width="40"
                  className="logo"
                />
                <div>
                  <h1 className="cf">CareFinder</h1>
                </div>
              </div>
              <div className="contact-info">
                <h4>Contact Us</h4>
                <address>
                  <img
                    src="/svg/loc.svg"
                    className="loc"
                    alt="location icon"
                  />
                  59, Ademayowa Street, ChiamakaVille, Lagos, Nigeria
                  <br />
                  <img
                    src="./src/assets/svg/call.svg"
                    className="call"
                    alt="telephone icon"
                  />
                  +234-707-174-6185
                  <br />
                  <img
                    src="./src/assets/svg/mail.svg"
                    className="mail"
                    alt="email icon"
                  />
                  findhospitals@gmail.com
                </address>
              </div>
            </div>
          </div>
          <div className="social-icons">
            <span>
              <img src="/svg/instagram.svg" />
            </span>
            <span>
              <img src="/svg/facebook.svg" />
            </span>
            <span>
              <img src="/svg/whatsapp.svg" />
            </span>
            <span>
              <img src="/svg/linkedin.svg" />
            </span>
          </div>
        </div>
        <hr></hr>
        <div className="footer-2">
          <div className="copy-right">
            <p className="footer-txt">
              © 2024 CareFinder Systems. All Rights Reserved.
            </p>
          </div>
          <div className="footer-links">
            <ul className="links">
              <li>
                <a href="#">Terms </a>
              </li>

              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
