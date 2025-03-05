import React from "react";
import "../styles/FreeRingSizer.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import CollectionWithForm from "../components/CollectionWithForm";
import CollectionWithTwoList from "../components/CollectionWithTwoLists";
import CollectionWithList from "../components/CollectionWithList";
import Card from "../components/Cards";

import {
  logoData,
  bgImgGftData,
  freeRingSizerData,
  ringSizeTableData,
  popularEnRings,
} from "../assets/data";
import Footer from "../components/Footer";

const FreeRingSizer = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };
  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[19]
    : bgImgGf;

  const logoUrl = getUrl(logoData, 0, "logoUrl");

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };

  const popularEnRingImages = filterImageByCategory(
    popularEnRings,
    "plr-en-rings"
  );
  const fashionRingImages = filterImageByCategory(
    freeRingSizerData,
    "fashion-rings"
  );

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
        <Logo logoSrc={logoUrl} altText="Logo" />
      </div>

      <Navbar />

      <BackgroundImage
        imageSrc={backgroundData.imgUrl}
        heading={backgroundData.heading}
        paragraph={backgroundData.paragraph}
        buttons={backgroundData.buttons}
        customClass="enr-buying-guide-bg"
      />

      <div className="req-free-ring-sizer">
        <h1 className="req-free-ring-sizer-head">Use Our Free Ring Sizer</h1>
      </div>

      <CollectionWithForm
        data={freeRingSizerData[0]}
        className="free-ring-sizer-form"
      />

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Inside Circumference (IN & MM)</th>
              <th>US, Canada, Mexico</th>
              <th>UK, Australia, Ireland, New Zealand, South Africa</th>
              <th>France</th>
              <th>Germany, Russia, Ukraine, Asia</th>
              <th>India, China, Japan, South America, Turkey, Israel</th>
              <th>Italy, Spain, Netherlands, Switzerland</th>
            </tr>
          </thead>
          <tbody>
            {ringSizeTableData.map((row, index) => (
              <tr key={index}>
                <td>{row.in_mm}</td>
                <td>{row.us}</td>
                <td>{row.uk}</td>
                <td>{row.france}</td>
                <td>{row.germany}</td>
                <td>{row.india}</td>
                <td>{row.italy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="make-your-ring-sizer">
        <h1 className="myrs-head1">Make Your Own Ring Sizer</h1>
        <CollectionWithTwoList
          data={freeRingSizerData[1]}
          className="make-your-ring-sizer-cl"
        />

        <h1 className="myrs-head2">Print a Ring Sizer</h1>
        <CollectionWithTwoList
          data={freeRingSizerData[2]}
          className="re-make-your-ring-sizer-cl"
        />
        <h1 className="myrs-head3">Measure an Existing Ring</h1>
        <CollectionWithTwoList
          data={freeRingSizerData[3]}
          className="make-your-ring-sizer-cl"
        />
      </div>

      <div className="popular-eng-rings">
        <div className="per-text">
          <h2 className="per-head">Popular Engagement Rings</h2>
          <p className="per-para">
            Discover our most popular engagement ring settings.
          </p>
          <button className="per-btn">Shop All Engagement Rings</button>
        </div>

        <div className="per-collection-cards">
          {renderCards(popularEnRingImages)}
        </div>
      </div>

      <div className="ring-fit-guide">
        <h1 className="ring-fit-head">How Should a Ring Fit?</h1>
        <p>
          A ring that fits appropriately will slide over your knuckle with
          minimal friction and sit snugly on your finger without feeling too
          tight. You should feel slight resistance but not need to apply too
          much force to take it on and off.
        </p>
        <h1 className="ring-fit-head">
          What to Do if You're in Between Ring Sizes
        </h1>
        <p>
          If you're in between ring sizes, we suggest sizing up rather than
          sizing down. Finger size can fluctuate throughout the day, and a ring
          that is too tight may not come over the knuckle easily — which can be
          painful. Additionally, there are simple, at-home ways to make a
          slightly loose ring feel tighter, but you'll need to consult a
          professional to size it up. Remember, if a half size doesn't feel
          quite right, contact us and we can craft a design in a quarter size to
          help you find the perfect fit.
        </p>
      </div>

      <div className="ring-size-tips">
        <h1 className="ring-size-tips-head">Ring Size Tips</h1>
        <CollectionWithList data={freeRingSizerData[4]} />
      </div>

      <div className="popular-eng-rings">
        <div className="per-text">
          <h2 className="per-head">Trending Fashion Rings</h2>
          <p className="per-para">Discover our most popular fashion rings</p>
          <button className="per-btn">Shop All Fashion Rings</button>
        </div>

        <div className="per-collection-cards">
          {renderCards(fashionRingImages)}
        </div>
      </div>

      <div className="resizing">
        <h1 className="resizing-head">
          Are There Any Types of Rings That Can't Be Resized?
        </h1>
        <p>
          Yes. Certain rings, such as eternity and open bands, and alternative
          metal styles aren't eligible for resizing due to the structure or
          material of their designs. If your ring cannot be resized, we'll
          include that information on the product detail page of your specific
          style. You may also exchange a ring that cannot be resized within our
          30-day free exchange period.
        </p>

        <h1 className="resizing-head">
          Brilliant Earth Free 30-Day Exchanges & 60-Day Resizes
        </h1>
        <p>
          Our commitment to you extends beyond delivery, and we're proud to
          offer free 30-day exchanges and free 60-day resizes to ensure that you
          can find the perfect fit. Most designs (even an eternity, open, or
          alternative metal style) can be exchanged for a new size within 30
          days free of charge, while any resizable design can be resized within
          60 days free of charge. To learn more about these policies, consult
          our Free 30-Day Returns & 60-Day Resizes page.
        </p>
      </div>

      <Footer />
    </>
  );
};
export default FreeRingSizer;
