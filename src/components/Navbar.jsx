import React, { useState } from "react";
import "../styles/Navbar.css";
import { GiDiamondRing } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";
import { TbDiamond } from "react-icons/tb";
import { GiGems } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownState, setDropdownState] = useState({
    isDropdownOpen: false,
    isWeddingDropdownOpen: false,
    isDiamondDropdownOpen: false,
    isGemstoneDropdownOpen: false,
    isJewelleryDropdownOpen: false,
  });

  const toggleDropdown = (dropdown, isOpen) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [dropdown]: isOpen,
    }));
  };

  return (
    <div className="navbar">
      <ul className="nav-items">
        <li
          className="dropdown"
          onMouseEnter={() => toggleDropdown("isDropdownOpen", true)}
          onMouseLeave={() => toggleDropdown("isDropdownOpen", false)}
        >
          <Link to="/engagement-rings" className="nav-link">
            ENGAGEMENT RINGS
          </Link>
          {dropdownState.isDropdownOpen && (
            <div className="er-dropdown-menu">
              <div className="hh">
                <div className="design-your-ring">
                  <h5>DESIGN YOUR OWN ENGAGEMENT RING</h5>
                  <Link to="/start-with-setting">
                    <GiDiamondRing /> Start with a setting
                  </Link>
                  <Link to="/start-with-diamond">
                    <IoDiamondOutline /> Start with a diamond
                  </Link>
                  <Link to="/start-with-lab-grown-diamond">
                    <TbDiamond /> Start with a lab-grown diamond
                  </Link>
                  <Link to="/start-with-gemstone">
                    <GiGems /> Start with a gem stone
                  </Link>
                  <Link to="/start-with-bridal-set">
                    Start with a bridal set
                  </Link>
                </div>

                <div className="engagement-styles">
                  <h5>ENGAGEMENT RING STYLES</h5>
                  <Link to="/solitaire">Solitaire</Link>
                  <Link to="/three-stone">Three Stone</Link>
                  <Link to="/nature-inspired">Nature Inspired</Link>
                  <Link to="/hidden-halo">Hidden Halo</Link>
                  <Link to="/halo">Halo</Link>
                </div>

                <div className="featured">
                  <h5>FEATURED</h5>
                  <Link to="/ready-to-ship">
                    Ready to Ship Engagement Rings
                  </Link>
                  <Link to="/signature-collection">Signature Collection</Link>
                  <Link to="/top-20">Top 20 Engagement Rings</Link>
                  <Link to="/mens-engagement-rings">
                    Men's Engagement Rings
                  </Link>
                  <Link to="/custom-engagement-rings">
                    Custom Engagement Rings
                  </Link>
                  <Link to="/tacori-collection">Tacori Collection</Link>
                  <Link to="/new-arrivals">New Arrivals</Link>
                </div>
                <div className="br-earth-diffrence">
                  <h5>BRILLIANT EARTH DIFFERANCE</h5>
                  <Link to="/weve-got-you-covered">We've got you covered</Link>
                  <Link to="/diamond-transparency">Diamond Transparency</Link>
                  <Link to="/our-mission">Our Mission</Link>
                  <Link to="/diamond-innovation">Diamond Innovation</Link>
                  <Link to="/recycled-gold">Recycled Gold</Link>
                </div>
              </div>

              <div className="hh2">
                <div className="shop-by-shape">
                  <h5>SHOP BY SHAPE</h5>
                  <Link to="/oval">Oval</Link>
                  <Link to="/emerald">Emerald</Link>
                  <Link to="/radiant">Radiant</Link>
                  <Link to="/marquise">Marquise</Link>
                  <Link to="/asscher">Asscher</Link>
                  <Link to="/round">Round</Link>
                  <Link to="/cushion">Cushion</Link>
                  <Link to="/pear">Pear</Link>
                  <Link to="/princess">Princess</Link>
                  <Link to="/heart">Heart</Link>
                </div>

                <div className="gem-stone-rings">
                  <h5>GEM STONE ENGAGEMENT RINGS</h5>
                  <Link to="/moissanite">Moissanite</Link>
                  <Link to="/sapphire">Sapphire</Link>
                  <Link to="/emerald">Emerald</Link>
                  <Link to="/aquamarine">Aquamarine</Link>
                  <Link to="/morganite">Morganite</Link>
                </div>

                <div className="engagement-ring-guides">
                  <h5>Engagement Ring Guides</h5>
                  <Link to="/engagement-ring-style-guide">
                    Engagement Ring Style Guide
                  </Link>
                  <Link to="/buying-guide-engagement-ring">
                    How Much to Spend on an Engagement Ring
                  </Link>
                  <Link to="/precious-metals">
                    Is Platinum Better Than Gold?
                  </Link>
                  <Link to="/Free-Ring-Sizer">Free Ring Sizer</Link>
                  <Link to="/2025-Engagement-Ring-Trends">
                    2025 Engagement Ring Trends
                  </Link>
                </div>
              </div>
            </div>
          )}
        </li>
        <li
          className="wr-dropdown"
          onMouseEnter={() => toggleDropdown("isWeddingDropdownOpen", true)}
          onMouseLeave={() => toggleDropdown("isWeddingDropdownOpen", false)}
        >
          <Link to="/wedding-rings" className="nav-link">
            WEDDING RINGS
          </Link>
          {dropdownState.isWeddingDropdownOpen && (
            <div className="dropdown-menu">
              <div className="hh-wr">
                <div className="women">
                  <h5>WOMEN</h5>
                  <Link to="/womens-wedding-rings">Women's Wedding Rings</Link>
                  <Link to="/diamond-rings">Diamond Rings</Link>
                  <Link to="/design-your-own-ring-stack">
                    Design Your Own Ring Stack
                  </Link>
                  <Link to="/find-matching-wedding-rings">
                    Find My Own Matching Wedding Rings
                  </Link>
                  <Link to="/eternity-rings">Eternity Rings</Link>
                  <Link to="/anniversary-rings">Anniversary Rings</Link>
                  <Link to="/curved-rings">Curved Rings</Link>
                  <Link to="/wedding-ring-sets">Wedding Ring Sets</Link>
                </div>

                <div className="men">
                  <h5>MEN</h5>
                  <Link to="/mens-wedding-bands">Men's Wedding Bands</Link>
                  <Link to="/classic-bands">Classic Bands</Link>
                  <Link to="/mens-engagement-rings">
                    Men's Engagement Rings
                  </Link>
                  <Link to="/customise-your-own-rings">
                    Customise Your Own Rings
                  </Link>
                  <Link to="/diamond-bands">Diamond Bands</Link>
                  <Link to="/matte-bands">Matte Bands</Link>
                  <Link to="/hammered-bands">Hammered Bands</Link>
                  <Link to="/mens-jewellery">Men's Jewellery</Link>
                </div>

                <div className="womens-by-metal">
                  <h5>WOMEN'S BY METAL</h5>
                  <Link to="/platinum">Platinum</Link>
                  <Link to="/yellow-gold">Yellow Gold</Link>
                  <Link to="/white-gold">White Gold</Link>
                  <Link to="/rose-gold">Rose Gold</Link>
                </div>
                <div className="last">
                  <div className="mens-by-metal">
                    <h5>MEN'S BY METAL</h5>
                    <Link to="/platinum">Platinum</Link>
                    <Link to="/yellow-gold">Yellow Gold</Link>
                    <Link to="/white-gold">White Gold</Link>
                    <Link to="/rose-gold">Rose Gold</Link>
                  </div>
                  <div className="alternative-metal">
                    <h5>ALTERNATIVE METAL</h5>
                    <Link to="/titanium">Titanium</Link>
                    <Link to="/meteorite">Meteorite</Link>
                    <Link to="/tungsten">Tungsten</Link>
                    <Link to="/tantalum">Tantalum</Link>
                  </div>

                  <div className="sbt">
                    <h5>SHOP BY STYLE</h5>
                  </div>
                </div>

                <div>
                  <div className="wedding-band-guides">
                    <h5>WEDDING BAND GUIDES</h5>
                    <Link to="/womens-weddingband-style-guide">
                      Women's Wedding Band Style Guide
                    </Link>
                    <Link to="/mens-wedding-band-style-gide">
                      Men's Wedding Band Style Guide
                    </Link>
                    <Link to="/ring-engraving-giude">Ring Engraving Guide</Link>
                    <Link to="/2025-wedding-ring-trends">
                      2025 Wedding Ring Trends
                    </Link>
                    <Link to="/wedding-ring-budget-guide">
                      Wedding Ring Budget Guide
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </li>
        <li
          className="dr"
          onMouseEnter={() => toggleDropdown("isDiamondDropdownOpen", true)}
          onMouseLeave={() => toggleDropdown("isDiamondDropdownOpen", false)}
        >
          <Link to="/diamonds" className="nav-link">
            DIAMONDS
          </Link>
          {dropdownState.isDiamondDropdownOpen && (
            <div className="dr-dropdown-menu">
              <div className="hh-dr">
                <div className="natural-diamonds">
                  <h5>ALTERNATIVE METAL</h5>
                  <h6>Search Natural Diamonds</h6>
                  <Link to="/oval">Oval</Link>
                  <Link to="/emerald">Emerald</Link>
                  <Link to="/radiant">Radiant</Link>
                  <Link to="/marquise">Marquise</Link>
                  <Link to="/asscher">Asscher</Link>
                  <Link to="/round">Round</Link>
                  <Link to="/cushion">Cushion</Link>
                  <Link to="/pear">Pear</Link>
                  <Link to="/princess">Princess</Link>
                  <Link to="/heart">Heart</Link>
                  <Link to="/elongated-cushion">Elongated Cushion</Link>
                </div>
              </div>
            </div>
          )}
        </li>

        <li
          className="gs"
          onMouseEnter={() => toggleDropdown("isGemstoneDropdownOpen", true)}
          onMouseLeave={() => toggleDropdown("isGemstoneDropdownOpen", false)}
        >
          <Link to="/gemstones" className="nav-link">
            GEMSTONES
          </Link>
          {dropdownState.isGemstoneDropdownOpen && (
            <div className="gs-dropdown-menu">
              <div className="hh-gs">
                <div className="design-gemstone-ring">
                  <h5>DESIGN YOUR OWN GEMSTONE RING</h5>
                  <Link to="/start-with-gemstone">Start With Gemstone</Link>
                  <Link to="/start-with-setting">Start With Setting</Link>
                  <Link to="/sapphire">Sapphire</Link>
                  <Link to="/moissanite">Moissanite</Link>
                  <Link to="/emerald">Emerald</Link>
                  <Link to="/aquamarine">Aquamarine</Link>
                  <Link to="/alexandrite">Alexandrite</Link>
                  <Link to="/colored-diamond">Colored Diamond</Link>
                  <Link to="/ruby">Ruby</Link>
                  <Link to="/morganite">Morganite</Link>
                </div>

                <div className="shop-by-color">
                  <h5>SHOP BY COLOR</h5>
                  <Link to="/blue">Blue</Link>
                  <Link to="/green">Green</Link>
                  <Link to="/pink">Pink</Link>
                  <Link to="/purple">Purple</Link>
                  <Link to="/teal">Teal</Link>
                  <Link to="/peach">Peach</Link>
                </div>

                <div className="sh-shape">
                  <h5>SHOP BY SHAPE</h5>
                  <Link to="/emerald">Emerald</Link>
                  <Link to="/oval">Oval</Link>
                  <Link to="/round">Round</Link>
                  <Link to="/cushion">Cushion</Link>
                  <Link to="/radiant">Radiant</Link>
                </div>

                <div className="preset-gemstone-rings">
                  <h5>PRESET GEMSTONE RINGS</h5>
                  <Link to="/moissanite-engagement-ring">
                    Moissanite Engagement Ring
                  </Link>
                  <Link to="/sapphire-engagement-ring">
                    Sapphire Engagement Ring
                  </Link>
                  <Link to="/aquamarine-engagement-ring">
                    Aquamarine Engagement Ring
                  </Link>
                  <Link to="/morganite-engagement-ring">
                    Morganite Engagement Ring
                  </Link>
                </div>
              </div>
            </div>
          )}
        </li>
        <li
          className="jl"
          onMouseEnter={() => toggleDropdown("isJewelleryDropdownOpen", true)}
          onMouseLeave={() => toggleDropdown("isJewelleryDropdownOpen", false)}
        >
          <Link to="/jewellery" className="nav-link">
            JEWELLERY
          </Link>
          {dropdownState.isJewelleryDropdownOpen && (
            <div className="jl-dropdown-menu">
              <div className="hh-jl">
                <div className="jewellery">
                  <h5>JEWELLERY</h5>
                  <Link to="/earrings">Earrings</Link>
                  <Link to="/necklaces">Necklaces</Link>
                  <Link to="/rings">Rings</Link>
                  <Link to="/bracelets">Bracelets</Link>
                  <Link to="/mens-jewelry">Men's Jewelry</Link>
                  <Link to="/lab-diamond-jewelry">Lab Diamond Jewelry</Link>
                  <Link to="/birthstone-jewelry">Birthstone Jewelry</Link>
                  <Link to="/gemstone-jewelry">Gemstone Jewelry</Link>
                  <Link to="/pearl-jewelry">Pearl Jewelry</Link>
                  <Link to="/diamond-jewelry">Diamond Jewelry</Link>
                </div>
              </div>
            </div>
          )}
        </li>
        <li>
          <Link to="/gift" className="nav-link">
            GIFT
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            ABOUT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
