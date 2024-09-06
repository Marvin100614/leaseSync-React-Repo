
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Footer.css";
import { BrowserRouter } from 'react-router-dom';


export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <Container className="custom-container">
            <div>
                <Navbar.Brand href="/home" className="brand-text">Lease<span>Sync</span></Navbar.Brand>
            </div>
            <div className="powered-con">
                <a className="powered-link-text" href="https://mytsoftdevsolutions.com/" target="_blank"> <p className="text-powered">Powered by MYT Softdev Solutions, Inc. @ 2024</p></a>
            </div>
            <div className="social-media-cont">
                <a href="https://www.facebook.com/MYTSoftDevSolutions" target="_blank" >
                    <img src="./socialMediaIcons/fb-icon.png" alt="fb-icon" />
                </a>
                <a href="https://www.linkedin.com/company/myt-software/about/" target="_blank">
                    <img src="./socialMediaIcons/linkedin-icon.png" alt="linkedin-icon" />
                </a>
                <a href="mailto:info@mytsoftdevsolutions.com">
                    <img src="./socialMediaIcons/email-icon1.png" alt="email-icon" />
                </a>
            </div>
        </Container>
      </div>
    </>
  );
}