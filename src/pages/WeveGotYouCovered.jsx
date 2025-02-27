import React from "react";
import "../styles/WeveGotYouCovered.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Collection from "../components/Collection";
import CollectionCards from "../components/CollectionCards";
import Footer from "../components/Footer";

import {
  logoData,
  shopByData,
  appointmentData,
  unmatchedCareData,
} from "../assets/data";

const WeveGotYouCovered = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");

  const dcUrl = getUrl(appointmentData, 1, "imgUrl");
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
          data={unmatchedCareData}
          containerClass="jwl-collections"
          cardClass="jwl-collections-cards"
          imageClass="jwl-collections-img"
          headingTag="h5"
          textClass="jwl-collections-text"
        />
      </div>

      <Collection data={shopByData[39]} />
      <Collection data={shopByData[40]} className="rare-gemstone" />

      <Footer />
    </>
  );
};
export default WeveGotYouCovered;
