import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./UPManagementPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';


export default function upManagementPage() {
  return (
  <div className="upManagement-main-container">
    <Header />
        <h2 className="heading-title-upManagement">USER PROFILE MANAGEMENT</h2>
        <Container className="upManagement-custom-container">
            <Row className="upMangement-custom-row">
                <Col>
                    <img className="management-pic" src="../images/upManagement-pic.png" alt="contacUs-img" />
                </Col>
                <Col className="upManagemen-second-col-custom">
                    <ul>
                        <li>Profile Creation and Editing:<p>Allow users to easily create and edit their profiles, providing essential information like name and contact details.</p></li>
                        <li>Privacy Controls: <p>Implement robust privacy controls, enabling users to choose who can view their profiles and interact with their content.</p> </li>
                        <li>Account Settings: <p> Offer a dedicated section for users to manage account settings, including email preferences and security features. </p></li>
                        <li>Profile Visibility: <p>Provide granular control over profile visibility, allowing users to set privacy preferences based on their preferences.</p> </li>
                        <li>Activity Tracking: <p>Enable users to track their activity, including interactions and contributions, within the platform.</p> </li>
                    </ul>
                    {/* <Link to="/features">
                     <img className="arrow-icon" src="../images/arrow-icon-blue.png" alt="arrow"/>
                    </Link> */}
                    <a href="/features"><img className="arrow-icon" src="../images/arrow-icon-blue.png" alt="arrow"/></a>
                </Col>
            </Row>
        </Container>
        <Footer />
    </div>
  );
}

