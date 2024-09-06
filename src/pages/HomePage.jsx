import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./HomePage.css";
import Header from '../components/Header'
import Footer  from '../components/Footer'
import FeaturesPage from './FeaturesPage';
import React, { useState } from 'react';


export default function HomePage() {
  
  const [scrollToTop, setScrollToTop] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      section.style ="padding-top: 150px; !important"
    }
  };

  return (

<div className="home-main-container">
<Header />
  <Container className="home-custom-container">
        <Row className="first-home-row">
          <Col className="home-first-col">
            <h1>Lease<span>Sync</span></h1>
            <h2 className="h2">Leasing <span>System</span></h2>
            <p>Discover innovative leasingsolutions. 
            Simplify renting for landlords  and tenants.
            List properties, manage leases, find your ideal home effortlessly.
            </p>
          </Col>
          <Col className="home-second-col">
            <img
              className="homeImg-1"
              src="/images/homePage-pic1.png"
              alt="leasing-img"
              />
          </Col>

        </Row>
        <div className="home-gradient">
          <img src="/images/gradient.png" alt="gradient"/>
      </div>
      <div className='getStarted-con'>
        <button className="Getstarted-btn" onClick={() => scrollToSection('benefitsSection')}>Get Started</button>
      </div>
  </Container>
     
{/* MIDDLE AREA */}
    <Container className="middle-con" id="benefitsSection">
        <h2 className="text-benefits">BENEFITS</h2>
{/* First Container */}
        <Row className="mid-row">
          <Col className="mid-col">
            <img
              className="home-page-pics"
              src="/images/homePage-pic2.png"
              alt="calculating-income"
              />
          </Col>
          <Col className="description-con">
            <h2 className="description-heading">Improved Financial <br/>Management</h2>
            <p>Gain real-time financial insights with our integrated tools.
               Empower landlords for smarter decision-making.</p>
          </Col>
        </Row>
{/* Second Container */}
        <Row className="mid-row">
          <Col className="description-con">
            <h2 className="description-heading">Error-Handled</h2>
            <p>Automate lease tracking and tenant communication for efficient property 
              management across multiple properties.</p>
          </Col>
          <Col>
            <img
              className="home-page-pics"
              src="/images/homePage-pic3.png"
              alt="error-handled"
              />
          </Col>
        </Row>
{/* Third Container */}
        <Row className="mid-row-last">
          <Col>
            <img
              className="home-page-pics"
              src="/images/homePage-pic4.png"
              alt="documents"
              />
          </Col>
          <Col className="description-con">
            <h2 className="description-heading">Centralized Digital <br/>Documents</h2>
            <p>Digital lease management replaces paper-based agreements, enhancing convenience 
              and environmental friendliness errors.</p>
          </Col>
        </Row>
        <div className='btn-con'>
        {/* <Link to={{ pathname: "/features", state: { scrollToTop: true } }}>
          <button className="seemore-btn">See more</button>
        </Link> */}
        <a className="see-more" href="/features">See more</a>
        </div>
    </Container>
    <Footer />
</div>
  );
}



