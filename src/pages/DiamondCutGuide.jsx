import React from "react";
import "../styles/DiamondCutGuide.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import DiamondCutCollection from "../components/DiamondCutCollection";
import Collection from "../components/Collection";
import DiamondCutTabs from "../components/DiamondCutChar";
import CollectionWithLink from "../components/CollectionWithLinks";
import Card from "../components/Cards";

import {
  logoData,
  bgImgGftData,
  diamondCutClData,
  learnMoreAbtDiamondsCardData,
} from "../assets/data";
import Footer from "../components/Footer";

const DiamondCutGuide = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };
  const logoUrl = getUrl(logoData, 0, "logoUrl");

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[23]
    : bgImgGftData;

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };

  const lmaDiamondsImages = filterImageByCategory(
    learnMoreAbtDiamondsCardData,
    "lma-diamonds"
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
        customClass="dmd-cut-guide-bg"
      />

      <DiamondCutCollection
        data={diamondCutClData[0]}
        className="diamond-cut-cl"
      />
      <Collection
        data={diamondCutClData[1]}
        className="diamond-cut-cl-reverse"
      />
      <Collection data={diamondCutClData[2]} className="diamond-cut-cl" />

      <div className="cut-char">
        <h1 className="cut-char-head">Cut Characteristics</h1>
        <p className="cut-char-para">
          To best understand the cut grade of a diamond, it's important to
          understand the following characteristics that, when evaluated
          together, define a high-quality cut.
        </p>
        <DiamondCutTabs />
        <div className="cut-char-abt">
          <h1>Polish</h1>
          <p>
            Polish is the quality of a diamond's external surface condition as a
            result of the polishing process. Various features, such as pits or
            nicks, are considered in evaluating polish. It is graded on a scale
            ranging from Ideal or Excellent to Poor and is generally listed on a
            diamond certificate.
          </p>

          <h1>Symmetry</h1>
          <p>
            Symmetry is the exactness of a diamond's external shape and the even
            arrangement of its facets. Therefore, it can be divided into two
            categories: proportion-related (external) and facet-related
            (internal). It is also graded on a scale ranging from Ideal or
            Excellent to Poor and is generally listed on a diamond certificate.
          </p>

          <h1>Proportion</h1>
          <p>
            A diamond's proportion is measured by its crown and pavilion angles
            and the overall measurements of its facets. As facets are like tiny
            mirrors, their proportion can be a crucial contributor to the
            overall face-up appearance of a diamond. Proportion can also help
            professionals understand how well a diamond will produce sparkle.
          </p>

          <h1>Brilliance </h1>
          <p>
            Brilliance, sometimes referred to as brightness, is the internal and
            external white light that reflects from a diamond. Each time light
            enters a diamond, its internal facets send it off in different
            directions, depending on the angle and tilt of the facets.
            Masterfully cut diamonds demonstrate superb brilliance because they
            bounce light off multiple facet surfaces.
          </p>
          <h1>Fire</h1>
          <p>
            Fire is the scattering of white light into the colors of the
            rainbow. Diamonds are excellent at scattering light and displaying
            it as a spectrum of colors that glint sparks of red, orange, yellow,
            green, or blue.
          </p>
          <p>
            Diamonds must be precisely cut for light to disperse in this manner.
            Imprecise, poorer cuts do not refract or scatter light as
            efficiently; instead, they allow the white light to escape before it
            can disperse a rainbow of sparkles.
          </p>

          <h1>Scintillation</h1>
          <p>
            Scintillation refers to the sparkle a diamond emits as you move it
            in the light: the facets split the white light into a spectrum of
            colors, creating sparks of light that appear to dance along the
            surface of the diamond. This is contrasted sharply against the
            darker, colored flashes that refract through the inner facets. The
            symmetry and balance between lighter and darker areas create the
            overall sparkle.
          </p>
        </div>
      </div>

      <CollectionWithLink
        data={diamondCutClData[3]}
        className="diamond-cut-cl-reverse"
      />
      <CollectionWithLink
        data={diamondCutClData[4]}
        className="diamond-cut-cl"
      />

      <Collection
        data={diamondCutClData[5]}
        className="diamond-cut-cl-reverse"
      />

      <div className="lma-diamonds">
        <h1 className="lma-diamonds-head">Learn More About Diamonds</h1>
        <div className="lma-diamonds-card">
          {renderCards(lmaDiamondsImages)}
        </div>
      </div>

      <Footer />
    </>
  );
};
export default DiamondCutGuide;
