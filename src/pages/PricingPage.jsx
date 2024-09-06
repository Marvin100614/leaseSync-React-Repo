import "./PricingPage.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


export default function pricingPage() {
  return (
    <div className="pricing-main-container">
    <Header />
        <h2 className="heading-title">PRICING</h2>
        <Container className="pricing-custom-container">
             

                <Col className="pricing-custom-col">
                  <h2>₱ 2,000 / <span>month</span></h2>
                  <h3>Basic Plan</h3>
                  <h4>billed monthly</h4>
                  <h5>Basic Plan features:</h5>
                  <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                  </ul>
                  <Link to="/contactUs" className="link-con">
                    <button className="get-started-btn">Get Started</button>
                  </Link>
                </Col>

                <Col className="pricing-custom-col" >
                  <h2>₱ 3,500 / <span>month</span></h2>
                  <h3>Premium Plan</h3>
                  <h4>billed monthly</h4>
                  <h5 className="text-premium">Premium Plan features:</h5>
                  <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                  </ul>
                  <Link to="/contactUs" className="link-con">
                    <button className="get-started-btn">Get Started</button>
                  </Link>
                </Col>
             
        </Container>
        <Footer />
        </div>
  );
}

