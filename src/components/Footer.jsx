import React, { useState } from "react";
import "../App";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errormessage, setErrormessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrormessage("");
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailRegex.test(email)) {
      setIsSubscribed(true);
      setShowEmailInput(false);
    } else {
      setErrormessage("Please Enter Valid Email Address.");
    }
  };

  const toggleEmailInput = () => {
    setShowEmailInput(!showEmailInput);
  };

  return (
    <footer className="Footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>ABOUT</h3>
          <ul>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Our Mission</a>
            </li>
            <li>
              <a href="#">Responsible Sourcing</a>
            </li>
            <li>
              <a href="#">Sustainability Goals</a>
            </li>
            <li>
              <a href="#">How We Give Back</a>
            </li>
            <li>
              <a href="#">Our People</a>
            </li>
            <li>
              <a href="#">Brilliant Earth Reviews</a>
            </li>
          </ul>
        </div>

        <div className="footer-section orders">
          <h3>ORDERS</h3>
          <ul>
            <li>
              <a href="#">Track Your Order</a>
            </li>
            <li>
              <a href="#">Free 30 Day Returns</a>
            </li>
            <li>
              <a href="#">Free Shipping Both Ways</a>
            </li>
            <li>
              <a href="#">Free Lifetime Warranty</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>CONTACT US</h3>
          <ul>
            <li>
              <a href="#">Live Chat</a>
            </li>
            <li>
              <a href="#">Book Appointment</a>
            </li>
            <li>
              <a href="#">Stores</a>
            </li>
            <li>
              <a href="#">Email Us</a>
            </li>
            <li>
              <a href="#">800.691.0952</a>
            </li>
            <li>
              <a href="#">Affiliates</a>
            </li>
          </ul>
        </div>

        <div className="footer-section education">
          <h3>EDUCATION</h3>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">4 C's of Diamond Guide</a>
            </li>
            <li>
              <a href="#">Lab Grown Diamond Guide</a>
            </li>
            <li>
              <a href="#">Moissanite vs. Diamond Guide</a>
            </li>
            <li>
              <a href="#">Free Ring Sizer + Ring Size Chart</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Investor Relation</a>
            </li>
          </ul>
        </div>

        <div className="footer-section service">
          <h3>CUSTOMER SERVICE</h3>
          <ul>
            <li>
              <a href="#">We’ve Got You Covered</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Jewellery Financing</a>
            </li>
            <li>
              <a href="#">Lifetime Diamond Upgrade</a>
            </li>
            <li>
              <a href="#">Promo Codes & Offers</a>
            </li>
            <li>
              <a href="#">Refer a Friend</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Accessibility Info</a>
            </li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>SIGN UP</h3>
          <ul>
            <li>
              <Link href="#" onClick={toggleEmailInput}>
                &#9993; Email Me Updates and Offers
              </Link>

              {showEmailInput && !isSubscribed && (
                <form onSubmit={handleEmailSubmit}>
                  <div className="email-input-container">
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </div>
                  <button type="submit">Subscribe</button>
                </form>
              )}

              {isSubscribed && !showEmailInput && (
                <div className="thank-you-message">
                  <p>
                    Thank you for subscribing to the Brilliant Earth newsletter.
                  </p>
                </div>
              )}

              {errormessage && !isSubscribed && (
                <div className="error-message">
                  <p>{errormessage}</p>
                </div>
              )}

              <div className="icons">
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaPinterestP />
                </a>
                <a href="#">
                  <FaXTwitter />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Brilliant Earth.</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Interest-Based Ads</p>
        <p>Do Not Sell or Share My Personal Information</p>
        <p>CA Transparency Act</p>
        <p>CPRA</p>
        <p>Site Map</p>
        <p>AUD</p>
        <p>CAD</p>
        <p>GBP</p>
        <p>USD</p>
      </div>
    </footer>
  );
};

export default Footer;
