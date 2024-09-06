import Container from 'react-bootstrap/Container';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./FeaturesPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect } from 'react';


export default function FeaturesPage() {

  const { state } = useLocation();

  useEffect(() => {
    if (state && state.scrollToTop) {
      window.scrollTo(0, 0);
    }
  }, [state]);
  
  return (
    
  <div className="features-main-container">
        <Header />
        <h2 className="heading-title-text">SYSTEM FEATURES</h2>
    <Container className="features-custom-container">
      <Row className="row-con">
          <Col className="col-con">
              <img
                className="features-pics"
                src="/images/featuresPage-pic1.png"
                alt="leasing-img"
                />
                <h2 className="text-title">
                User Profile <br />Management
                </h2>
                {/* <Link to="/userProfileManagement">
                  <img  className="arrow-icon-link" src="/images/right-arrow.png" alt="arrow-icon" />
                </Link> */}
                <a href="/userProfileManagement"> <img  className="arrow-icon-link" src="/images/right-arrow.png" alt="arrow-icon" /></a>
          </Col>
          <Col className="col-con">
              <img
                className="features-pics"
                src="/images/featuresPage-pic2.png"
                alt="leasing-img"
                />
                <h2 className="text-title">
                Management of <br />Units
                </h2>
                {/* <Link to="/userProfileManagement">
                <img  className="arrow-icon-link" src="/images/right-arrow.png" alt="arrow-icon" />
                </Link> */}
                 <a href="/userProfileManagement"> <img  className="arrow-icon-link" src="/images/right-arrow.png" alt="arrow-icon" /></a>
          </Col>
          <Col className="col-con">
              <img
                className="features-pics"
                src="/images/featuresPage-pic3.png"
                alt="leasing-img"
                />
                <h2 className="text-title">
                Management of Bills <br /> and Payments
                </h2>
                {/* <Link to="/userProfileManagement">
                <img  className="arrow-icon-link" src="/images/right-arrow.png" alt="arrow-icon" />
                </Link> */}
                 <a href="/userProfileManagement"> <img  className="arrow-icon-link" src="/images/right-arrow.png" alt="arrow-icon" /></a>
          </Col>
          <Col className="col-con">
              <img
                className="features-pics"
                src="/images/featuresPage-pic4.png"
                alt="leasing-img"
                />
                <h2 className="text-title">
                Expense <br />Tracking
                </h2>
                {/* <Link to="/userProfileManagement">
                <img  className="arrow-icon-link" src="/images/right-arrow.png" alt="arrow-icon" />
                </Link> */}
                 <a href="/userProfileManagement"> <img  className="arrow-icon-link" src="/images/right-arrow.png" alt="arrow-icon" /></a>
          </Col>
        </Row>
        <Row className="row-con">
          <Col className="col-con">
              <img
                className="features-pics"
                src="/images/featuresPage-pic5.png"
                alt="leasing-img"
                />
                <h2 className="text-title">
                Lease Renewal <br />Optimization
                </h2>
                {/* <Link to="/userProfileManagement">
                <img  className="arrow-icon-link" src="/images/right-arrow.png" alt="arrow-icon" />
                </Link> */}
                 <a href="/userProfileManagement"> <img  className="arrow-icon-link" src="/images/right-arrow.png" alt="arrow-icon" /></a>
          </Col>
          <Col className="col-con">
              <img
                className="features-pics"
                src="/images/featuresPage-pic6.png"
                alt="leasing-img"
                />
                <h2 className="text-title">
                Unit Penalty <br />Management
                </h2>
                {/* <Link to="/userProfileManagement">
                <img  className="arrow-icon-link" src="/images/right-arrow.png" alt="arrow-icon" />
                </Link> */}
                 <a href="/userProfileManagement"> <img  className="arrow-icon-link" src="/images/right-arrow.png" alt="arrow-icon" /></a>
          </Col>
          <Col className="col-con">
              <img
                className="features-pics"
                src="/images/featuresPage-pic7.png"
                alt="leasing-img"
                />
                <h2 className="text-title">
                Maintenance Request <br />Tracking
                </h2>
                {/* <Link to="/userProfileManagement">
                <img  className="arrow-icon-link" src="/images/right-arrow.png" alt="arrow-icon" />
                </Link> */}
                 <a href="/userProfileManagement"> <img  className="arrow-icon-link" src="/images/right-arrow.png" alt="arrow-icon" /></a>
          </Col>
          <Col className="col-con">
              <img
                className="features-pics"
                src="/images/featuresPage-pic8.png"
                alt="leasing-img"
                />
                <h2 className="text-title">
                Emergency  <br />Preparedness Planning
                </h2>
                {/* <Link to="/userProfileManagement">
                <img  className="arrow-icon-link" src="/images/right-arrow.png" alt="arrow-icon" />
                </Link> */}
                 <a href="/userProfileManagement"> <img  className="arrow-icon-link" src="/images/right-arrow.png" alt="arrow-icon" /></a>
          </Col>
        </Row>
      
    </Container>
    <h3 className="text-interested">Interested?</h3>
    <div className='btn-con'>
    {/* <Link to="/scheduleDemo">
      <button className="schedule-button">Schedule a Demo</button>
    </Link> */}
    <a className="scheduleaDemo-link" href="/scheduleDemo">Schedule a Demo</a>
    </div>
    <Footer />
  </div>
  );
}

