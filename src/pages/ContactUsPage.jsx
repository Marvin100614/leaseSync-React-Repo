import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ContactUsPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function contactUsPage() {
  return (
<div className="contact-main-container">
    <Header />
        <h2 className="heading-title-contact">CONTACT US</h2>
        <Container className="contact-custom-container">
            <Row className="contactus-row">
                <Col className="contact-col">
                    <img  className="contactus-img" src="../images/contactUs-pic1.png" alt="contacUs-img" />
                </Col>
                <Col className="second-col-custom">
                    <div className="container">
                        <img className="icons" src="../images/map-icon.png" alt="map-icon" />
                        <p className="address-text">301 The Greenery, Pope John Paul II Avenue, Kasambagan, Cebu City, Philippines</p>
                    </div>
                    {/* <div className="container">
                        <img  className="icons" src="../images/tel-icon.png" alt="tel-icon" />
                        <p className="contact-text">+63 917 327 6230</p>
                    </div> */}
                    <div className="container">
                        <img className="icons" src="../images/email-icon.png" alt="email-icon" />
                        <p className="email-text" >info@mytsoftdevsolutions.com</p>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className="contactUs-gradient" src="../images/contactUs-gradient.png" alt="gradient"/>
    <Footer />
</div>
  );
}

