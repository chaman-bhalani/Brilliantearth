import React, { useEffect, useState } from "react";
import "../styles/ReadyToShip.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../pages/ReadyToShipCards";
import Card from "../components/Cards";
import { readyToShipData, logoData, rtsData, mtsData } from "../assets/data";

const ReadyToShip = () => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const cardsPerPage = 10;

  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const filterImageByCategory = (data, category) => {
    if (Array.isArray(data)) {
      return data.filter((item) => item.category === category);
    } else if (data && data.items && Array.isArray(data.items)) {
      return data.items.filter((item) => item.category === category);
    } else {
      console.error("Data is not in the expected format", data);
      return [];
    }
  };

  const set6Images = filterImageByCategory(rtsData, "set6");
  const set7Images = filterImageByCategory(mtsData, "set7");

  const reCards = (imageArray) => {
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

  const renderCards = (imageArray) => {
    return imageArray.map((item) => (
      <Cards
        key={item.id}
        id={item.id}
        imgUrl={item.imgUrl}
        hoverUrl={item.hoverUrl || ""}
        alt={item.alt}
        footer={item.footer}
        alternateImages={item.alternateImages || []}
        alternateFooter={item.alternateFooter || ""}
        price={item.price}
      />
    ));
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");
  const imageSrc = getUrl(readyToShipData, 0, "imgUrl");

  const handleImageIntersection = (entry, imgId) => {
    if (entry.isIntersecting) {
      setLoadedImages((prev) => new Set(prev).add(imgId));
    }
  };

  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const imgId = entry.target.getAttribute("data-id");
        handleImageIntersection(entry, imgId);
      });
    },
    {
      rootMargin: "100px",
    }
  );

  useEffect(() => {
    const images = document.querySelectorAll(".lazy-load");
    images.forEach((img) => imageObserver.observe(img));

    return () => {
      images.forEach((img) => imageObserver.unobserve(img));
    };
  }, []);

  return (
    <>
      <Logo logoSrc={logoUrl} altText="Company Logo" />
      <Navbar />
      <div className="banner-container">
        <img src={imageSrc} alt="background" className="banner-image" />
        <div className="banner-overlay">
          <div className="banner-text">
            <h1 className="banner-head">Ready to Ship Engagement Rings</h1>
            <p className="banner-pera">
              Explore our top engagement rings preset with hand-picked and
              certified lab and natural diamonds. Each design ships your way
              right away — so you can propose now.
            </p>
          </div>
        </div>
      </div>

      <section className="rts">
        <div className="rts-card-container">{renderCards(set6Images)}</div>
      </section>

      <div className="more-to-explore">
        <h1 className="mte-head">More to Explore</h1>
        <div className="mte-cards">{reCards(set7Images)}</div>
      </div>

      <Footer />
    </>
  );
};

export default ReadyToShip;
