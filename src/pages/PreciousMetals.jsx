import React from "react";
import "../styles/PreciousMetals.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/PosterPhoto";
import Card from "../components/Cards";

import {
  logoData,
  bgImgGftData,
  preciusMetalData,
  popularEnRings,
} from "../assets/data";
import Footer from "../components/Footer";
import Collection from "../components/Collection";

const PreciousMetals = () => {
  const getUrl = (data, index = 0, key = "imgUrl") => {
    return Array.isArray(data) ? data[index][key] : data[key];
  };

  const logoUrl = getUrl(logoData, 0, "logoUrl");

  const backgroundData = Array.isArray(bgImgGftData)
    ? bgImgGftData[17]
    : bgImgGftData;

  const filterImageByCategory = (data, category) => {
    return data.filter((item) => item.category === category);
  };

  const popularEnRingImages = filterImageByCategory(
    popularEnRings,
    "plr-en-rings"
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

      <div className="pl-vs-gl">
        <h1 className="pl-vs-gl-head">Platinum vs. Gold</h1>
        <p className="pl-vs-gl-para">
          Choosing between platinum and gold for jewelry, especially for
          engagement and wedding rings, requires understanding each metal's
          unique properties. Both platinum and gold have their unique appeal,
          advantages, and price points—all of which can impact your decision.
          This guide will provide a full comparison of platinum, white gold,
          yellow gold, and rose gold.
        </p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>{""}</th>
                <th>Appearance</th>
                <th>Composition</th>
                <th>Durability</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Platinum</td>
                <td>Platinum is a lustrous silvery-white metal.</td>
                <td>
                  Platinum is a mixture of pure platinum and alloys like
                  ruthenium and iridium.
                </td>
                <td>
                  Platinum is a highly durable metal that maintains its shape
                  over time.
                </td>
                <td>
                  Platinum is one of the most expensive precious metals due to
                  its rarity and durability.
                </td>
              </tr>
              <tr>
                <td>White Gold</td>
                <td>
                  White gold is typically plated with rhodium, giving it a
                  silvery white finish like platinum. 18K white gold is
                  resistant to scratching and has a naturally high shine.
                </td>
                <td>
                  White gold is composed of white gold and alloys like nickel.
                  It gets its shiny, silvery color from rhodium plating.
                </td>
                <td>
                  White gold is a durable metal that’s suitable for everyday
                  wear.
                </td>
                <td>
                  White gold is less expensive than platinum but may require
                  re-plating to maintain its bright finish.
                </td>
              </tr>
              <tr>
                <td>Yellow Gold</td>
                <td>
                  Yellow gold is famous for its rich, warm hue. Since gold is
                  naturally yellow, the color will remain consistent and will
                  not require routine maintenance.
                </td>
                <td>
                  Yellow gold is alloyed with different amounts of alloys like
                  copper and zinc. 18k gold has a higher percentage of pure gold
                  than 14k.
                </td>
                <td>
                  Yellow gold is a durable metal that’s suitable for everyday
                  wear.
                </td>
                <td>
                  Yellow gold is less expensive than platinum and requires less
                  maintenance than white gold.
                </td>
              </tr>
              <tr>
                <td>Rose Gold</td>
                <td>Rose gold features blush pink hues.</td>
                <td>
                  14k rose gold is alloyed with copper to get its rosy hue.
                </td>
                <td>
                  Rose gold is a durable metal that’s suitable for everyday
                  wear, but is less durable than platinum.
                </td>
                <td>
                  Rose gold, like yellow gold, is less expensive than platinum
                  and requires less maintenance than white gold.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Collection data={preciusMetalData[0]} />
      <Collection
        data={preciusMetalData[1]}
        className="precious-mtl-cl-reverse"
      />
      <Collection data={preciusMetalData[2]} />

      <div className="pl-vs-gl-better">
        <h1 className="pl-cs-gl-better-head">
          Platinum vs. Gold: Which Is Better?
        </h1>
        <p>
          When choosing between gold and platinum, consider factors such as
          appearance, durability, and price. Gold is less expensive and offers a
          range of colors. Platinum, while more expensive, is incredibly
          durable, hypoallergenic, and maintains its natural white color over
          time, making it ideal for those with active lifestyles or sensitive
          skin.
        </p>
        <p>
          Ultimately, your decision should reflect your lifestyle, budget, and
          personal style preferences. Gold provides a versatile, budget-friendly
          option with various color choices, while platinum offers unmatched
          durability and low maintenance, justifying its higher cost. Consider
          these factors to choose the metal that best suits your needs.
        </p>
      </div>

      <div className="pplr-enr">
        <h1 className="pplr-enr-head">Popular Engagement Ring</h1>
        <div className="per-collection-cards">
          {renderCards(popularEnRingImages)}
        </div>
      </div>

      <Footer />
    </>
  );
};
export default PreciousMetals;
