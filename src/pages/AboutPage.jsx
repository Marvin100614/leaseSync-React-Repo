import Container from 'react-bootstrap/Container';
import "./AboutPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function aboutPage() {
  return (
  <div className="about-main-container">
    <Header />
        <h2 className="heading-title-about">ABOUT</h2>
        <Container className="about-custom-container">
          <div className="first-container">
            <p className="about-text">LeaseSync <span> is an innovative leasing software solution developed by MYT SoftDev Solutions, crafted to revolutionize and enhance the leasing experience.</span></p>
          </div>
          <div className="second-container">
            <img className="myt-logo" src="../images/myt-logo.png" alt="myt-logo" />
            <h2>Lease<span>Sync</span></h2>
          </div>
          <div className="third-container">
            <p className="about-text">At its essence, <span>LeaseSync</span> is engineered to overcome typical hurdles encountered in leasing processes. It serves as a holistic platform, addressing challenges such as complex lease management, manual lease tracking, ineffective invoice management, and the lack of centralized inventory visibility.</p>
          </div>
        </Container>
    <Footer />
  </div>
  );
}

