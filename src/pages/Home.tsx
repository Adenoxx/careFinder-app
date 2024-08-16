import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="section-1">
        <div className="container">
          <div className="header">
            <img
              src="./src/assets/img/hospital-logo.png"
              alt="hospital-search-logo"
              height="50"
              width="40"
              className="logo"
            />
            <h1>CareFinder</h1>
          </div>

          <div className="navigation">
            <Navbar />
          </div>
        </div>

        <section className="brand">
          <div>
            <h2>See Care Providers Near You</h2>
            <p className="brand-text">
              CareFinder is designed to streamline the process of finding and
              sharing hospitals information tailored to your needs near you.
              With just a click.....
            </p>
            <br></br>
            <button className="action">Find Hospitals</button>
          </div>
          <div className="hero-img">
            <img
              src="./src/assets/img/hos-img.jpeg"
              alt="hospital-building"
              height="500"
              width="800"
            />
          </div>
        </section>
        <br></br>
        <br></br>
        <div className="services">
          <span>
            <h4>Locate hospitals in your vicinity</h4>
            <p>
              Get details of hospitals near you, help a friend using our export
              features
            </p>
          </span>
          <hr></hr>
          <span>
            <h4>Emergency Care Service</h4>
            <p>Get urgent care services from hospitals near you</p>
          </span>
          <hr></hr>
          <span>
            <h4>Online Support</h4>
            <p>Our agents are readily available to assist you</p>
          </span>
        </div>
      </div>
      <br></br>
      <br></br>
      
      
      <Footer />
    </>
  );
}

export default Home;
