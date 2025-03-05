import React from "react";
import "../styles/BuyingGuideEngagementRing.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import Collection from "../components/Collection";
import Footer from "../components/Footer";

import { logoData, bgImgGftData, engRingBuyingGuideData } from "../assets/data";
const BuyingGuideEngagementRing = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[16]
    : bgImgGftData;

  return (
    <>
      <div>
        <Logo logoSrc={logoUrl} altText="logo" />
      </div>

      <Navbar />

      <BackgroundImage
        imageSrc={backgroundData.imgUrl}
        heading={backgroundData.heading}
        paragraph={backgroundData.paragraph}
        buttons={backgroundData.buttons}
        customClass="enr-buying-guide-bg"
      />

      <div className="enr-buying-guide-msg">
        <p className="enr-buying-guide-msg-para">
          It’s important to consider the many different engagement ring options
          available while setting a budget, keeping in mind what you and your
          partner value most. When balancing between personal meaning and
          aesthetic preferences, make sure to evaluate various factors –
          including ways to maximize value, different payment options, and more.
        </p>
      </div>

      <div className="cost-info">
        <Collection data={engRingBuyingGuideData[0]} />
        <Collection
          data={engRingBuyingGuideData[1]}
          className="cost-info-cl-reverse"
        />
      </div>

      <div class="engagement-ring-budget-tips">
        <h2>
          Engagement Ring Budget Tips: What to Know When Buying an Engagement
          Ring
        </h2>

        <p>There are many ways to maximize your engagement ring budget.</p>
        <ul>
          <li>
            When choosing a diamond, knowing the details of your partner’s
            preferences will help you determine which of the 4 C’s are most
            important, and which can be de-prioritized. Sparkle, which is
            determined by cut, and color are usually highly valued and might
            need to be prioritized over diamond size. A diamond’s shape, depth,
            and symmetry also affect how big (or small) a diamond looks.
            Elongated shapes (such as oval and emerald) appear larger than 1:1
            diamonds (such as round) because elongated shapes can carry most of
            their weight in their length as well as their depth.
          </li>
          <li>
            Consider choosing white gold instead of platinum for the engagement
            ring band, as platinum is the most expensive precious metal option.
            Known for its luxe shine in cool tones, white gold doesn’t rush,
            tarnish or corrode, and is easy to work into fine, intricate
            designs.
          </li>
          <li>
            Being intentional with the level of detail in the setting is a
            stylish way to get maximum sparkle impact for less. Smaller accent
            diamonds will not cost as much altogether as larger center stones.
          </li>
          <li>
            Fancy-shaped natural diamonds can cost 20% to 30% less than round
            natural diamonds. A fancy-shaped diamond will help you get the
            largest size possible for the same price.
          </li>
          <li>
            Explore diamond sizes slightly under standard carat weight limits --
            otherwise known as magic sizes. These magic sizes can let you get a
            diamond of a similar size for a significantly lower cost.
          </li>
          <li>
            Lab grown diamonds, which have the same exact chemical, optical, and
            physical properties as natural diamonds, are available at more
            affordable prices than natural diamonds of the same size.
          </li>
          <li>
            Diamond alternatives such as moissanite, white sapphire, and other
            gemstones should also be considered for a very similar look to
            diamonds for a lower cost.
          </li>
          <li>
            Alternative ring options are also coming into the mainstream. We’ve
            seen rising popularity of rings without center stones, wider width
            bands, and diamond-encircled eternity bands – either worn on their
            own, or as stylish and personal ring stacks.
          </li>
        </ul>
      </div>

      <Collection
        data={engRingBuyingGuideData[2]}
        className="cost-info-cl-reverse"
      />

      <Footer />
    </>
  );
};
export default BuyingGuideEngagementRing;
