// External imports
import React from "react";

// Component imports
import Logo from "../components/Logo";
import BackgroundVideo from "../components/PosterVideo";
import Card from "../components/Cards";
import AboutPoster from "../components/AboutPoster";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Collection from "../components/Collection";

// Data imports
import {
  logoData,
  jwlCatagory,
  diamondShapes,
  engRings,
  vdayMustHaves,
  videoData,
  colletionData,
  appointmentData,
  learnMoreData,
  mhRingData,
} from "../assets/data";

const HomePage = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");
  const videoUrl = getUrl(videoData, 0, "videoUrl");
  const velUrl = getUrl(vdayMustHaves, 0, "imgUrl");
  const flUrl = getUrl(colletionData, 1, "imgUrl");
  const ssUrl = getUrl(appointmentData, 0, "imgUrl");
  const bgData = learnMoreData[0];

  const set1Images = filterImageByCategory(jwlCatagory, "set1");
  const set2Images = filterImageByCategory(diamondShapes, "set2");
  const set3Images = filterImageByCategory(engRings, "set3");
  const set4Images = filterImageByCategory(vdayMustHaves, "set4");
  const set5Images = filterImageByCategory(mhRingData, "set5");

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

      <div>
        <Navbar />
      </div>

      <div>
        <BackgroundVideo videoSrc={videoUrl} />
      </div>

      <br />

      <section className="jl-category">
        <h1 className="Jewellery-head">Shop Jewellery by Category</h1>
        <div className="jl-category-cards">{renderCards(set1Images)}</div>
      </section>

      <section className="shapes">
        <h1 className="shape-heading">Shop Diamonds by Shape</h1>
        <div className="shape-cards">{renderCards(set2Images)}</div>
      </section>

      <section className="mh">
        <h1 className="mh-heading">Must Have Rings</h1>
        <p className="mh-pera">
          Add to your stack with our best selling designs.
        </p>
        <div className="mh-ring-cards">{renderCards(set5Images)}</div>
      </section>

      <section className="engagement-rings">
        <h1 className="er-heading">Popular Engagement Rings</h1>
        <div className="er-cards">{renderCards(set3Images)}</div>
      </section>

      <div className="banner-div">
        <img
          className="banner"
          src={velUrl}
          alt="Shop The Valentine's Day Gift Guide"
        />
      </div>

      <section className="musthaves">
        <h1 className="musthave-heading">Valentine's Day Must-Haves</h1>
        <div className="mh-cards">{renderCards(set4Images)}</div>
      </section>

      <section className="price-btn">
        <h1 className="gift-head">Shop Gifts by Price</h1>
        <div className="g-btn">
          <button className="g-btn1">Gifts under $250</button>
          <button className="g-btn2">Gifts under $500</button>
          <button className="g-btn3">Gifts under $1000</button>
        </div>
      </section>

      <Collection data={colletionData[0]} />

      <div className="fl-collection">
        <img className="fl-img" src={flUrl} alt="The Flawless Collection" />
      </div>

      <div className="ss-div">
        <img className="ss-img" src={ssUrl} alt="Appointment Banner" />
      </div>

      <section className="appointment">
        <h1 className="ap-heading">We're Here for You, In Person and Online</h1>
        <p className="ap-pera">
          Whether it’s at a store near you or online, we curate your appointment
          just for you.
        </p>
        <div className="ap-btn">
          <button className="ap-btn1">Visit a Showroom</button>
          <button className="ap-btn2">Book a Virtual Appointment</button>
        </div>
      </section>

      <div>
        <AboutPoster
          imageSrc={bgData.imgUrl}
          heading={bgData.heading}
          paragraph={bgData.paragraph}
        />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
