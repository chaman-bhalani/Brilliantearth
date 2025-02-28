import React from "react";
import "../styles/WeveGotYouCovered.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Collection from "../components/Collection";
import CollectionCards from "../components/CollectionCards";
import Footer from "../components/Footer";
import Card from "../components/Cards";
import BackgroundImage from "../components/PosterPhoto";

import {
  logoData,
  shopByData,
  appointmentData,
  unmatchedCareData,
  bgImgGftData,
} from "../assets/data";

import { IoCallOutline, IoChatbubbleOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";

const WeveGotYouCovered = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");

  const dcUrl = getUrl(appointmentData, 1, "imgUrl");

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };

  const unmatchedCare = filterImageByCategory(
    unmatchedCareData,
    "unmatched-care"
  );
  const shopByWGC = filterImageByCategory(unmatchedCareData, "wgc-shopby");

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[8]
    : bgImgGftData;

  const renderCards = (imageArray) => {
    return imageArray.map((item) => (
      <Card
        key={item.id}
        url={item.imgUrl}
        alt={item.alt}
        footer={item.footer}
        hoverUrl={item.hoverUrl}
      />
    ));
  };

  return (
    <>
      <div>
        <Logo logoSrc={logoUrl} altText="Company Logo" />
      </div>
      <Navbar />

      <h1 className="covered-page-head">We've Got You Covered</h1>
      <p className="covered-page-para">
        Your jewelry deserves a lifetime of care—and that’s what we’re here for.
      </p>
      <Collection data={shopByData[37]} />
      <Collection data={shopByData[38]} className="rare-gemstone" />
      <img className="ss-img" src={dcUrl} alt="Ap" />

      <div className="unmatched-care">
        <h1 className="unmatched-care-head">Our Unmatched Care</h1>
        <CollectionCards
          data={unmatchedCare}
          containerClass="jwl-collections"
          cardClass="jwl-collections-cards"
          imageClass="jwl-collections-img"
          headingTag="h5"
          textClass="jwl-collections-text"
        />
      </div>

      <Collection data={shopByData[39]} />
      <Collection data={shopByData[40]} className="rare-gemstone" />

      <BackgroundImage
        imageSrc={backgroundData.imgUrl}
        heading={backgroundData.heading}
        paragraph={backgroundData.paragraph}
        buttons={backgroundData.buttons}
        customClass="personal-attention"
      />

      <div className="contact-us">
        <h1 className="contact-us-head">Contact Us</h1>
        <p className="contact-us-para">
          We're here to help with any questions you may have! Our jewelry
          specialists are available 24/7.
        </p>
        <div className="contact-us-ways">
          <div className="contact-us-call">
            <div className="cuw-icon-call">
              <IoCallOutline />
            </div>
            <h2 className="cuw-call-head">Call</h2>
            <p className="cuw-call-para">
              We're always game for a good old fashioned phone call at
              800-691-0952.
            </p>
          </div>

          <div className="contact-us-chat">
            <div className="cuw-icon-chat">
              <IoChatbubbleOutline />
            </div>
            <h2 className="cuw-chat-head">Chat</h2>
            <p className="cuw-chat-para">
              Get 24/7 support when you live chat our jewelry specialists.
            </p>
          </div>
          <div className="contact-us-email">
            <div className="cuw-icon-email">
              <GoMail />
            </div>
            <h2 className="cuw-email-head">Email</h2>
            <p className="cuw-email-para">
              Need assistance? Drop us a line and we'll make sure you're taken
              care of.
            </p>
          </div>
        </div>
      </div>

      <div className="wgc-shopby-container">
        <h1 className="wgc-shopby-head">Shop By Category</h1>
        <div className="wgc-shopby-cards">{renderCards(shopByWGC)}</div>
      </div>

      <Footer />
    </>
  );
};
export default WeveGotYouCovered;
