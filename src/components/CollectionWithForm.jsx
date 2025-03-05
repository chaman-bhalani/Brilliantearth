import React, { useState } from "react";
import "../styles/CollectionWithForm.css";

const CollectionWithForm = ({ data, className }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    addressLine1: "",
    aptSuite: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    message: "",
    receiveUpdates: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const countryStateMap = {
    "United States": [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "APO/FPO Americas",
      "APO/FPO Europe",
      "APO/FPO Pacific",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District Of Columbia",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ],
    "United Kingdom": [
      "Aberdeenshire",
      "Angus",
      "Argyll",
      "Avon",
      "Ayrshire",
      "Banffshire",
      "Bedfordshire",
      "Berkshire",
      "Berwickshire",
      "Buckinghamshire",
      "Caithness",
      "Cambridgeshire",
      "Cheshire",
      "Clackmannanshire",
      "Cleveland",
      "Clwyd",
      "Cornwall",
      "County Antrim",
      "County Armagh",
      "County Down",
      "County Durham",
      "County Fermanagh",
      "County Londonderry",
      "County Tyrone",
      "Cumbria",
      "Derbyshire",
      "Devon",
      "Dorset",
      "Dumfriesshire",
      "Dunbartonshire",
      "Dyfed",
      "East Lothian",
      "East Sussex",
      "Essex",
      "Fife",
      "Gloucestershire",
      "Greater London",
      "Gwent",
      "Gwynedd",
      "Hampshire",
      "Herefordshire",
      "Hertfordshire",
      "Inverness-shire",
      "Isle Of Arran",
      "Isle Of Barra",
      "Isle Of Benbecula",
      "Isle Of Bute",
      "Isle Of Canna",
      "Isle Of Coll",
      "Isle Of Colonsay",
      "Isle Of Cumbrae",
      "Isle Of Eigg",
      "Isle Of Gigha",
      "Isle Of Harris",
      "Isle Of Iona",
      "Isle Of Islay",
      "Isle Of Jura",
      "Isle Of Lewis",
      "Isle Of Mull",
      "Isle Of North Uist",
      "Isle Of Rum",
      "Isle Of Scalpay",
      "Isle Of Skye",
      "Isle Of South Uist",
      "Isle Of Tiree",
      "Isle Of Wight",
      "Kent",
      "Kincardineshire",
      "Kinross-shire",
      "Kirkcudbrightshire",
      "Lanarkshire",
      "Lancashire",
      "Leicestershire",
      "Lincolnshire",
      "Merseyside",
      "Mid Glamorgan",
      "Mid Lothian",
      "Middlesex",
      "Morayshire",
      "Nairnshire",
      "Norfolk",
      "North Humberside",
      "North Yorkshire",
      "Northamptonshire",
      "Northumberland",
      "Nottinghamshire",
      "Oxfordshire",
      "Peeblesshire",
      "Perthshire",
      "Powys",
      "Renfrewshire",
      "Ross-shire",
      "Roxburghshire",
      "Selkirkshire",
      "Shropshire",
      "Somerset",
      "South Glamorgan",
      "South Humberside",
      "South Yorkshire",
      "Staffordshire",
      "Stirlingshire",
      "Suffolk",
      "Surrey",
      "Sutherland",
      "Tyne And Wear",
      "Warwickshire",
      "West Glamorgan",
      "West Lothian",
      "West Midlands",
      "West Sussex",
      "West Yorkshire",
      "Wigtownshire",
      "Wiltshire",
      "Worcestershire",
    ],
    Canada: [
      "Alberta",
      "British Columbia",
      "Manitoba",
      "New Brunswick",
      "Newfoundland And Labrador",
      "Northwest Territories",
      "Nova Scotia",
      "Nunavut",
      "Ontario",
      "Prince Edward Island",
      "Quebec",
      "Saskatchewan",
      "Yukon Territories",
    ],
    Australia: [
      "Australian Capital Territory",
      "New South Wales",
      "Northern Territory",
      "Queensland",
      "South Australia",
      "Tasmania",
      "Victoria",
      "Western Australia",
    ],
  };

  const availableStates = formData.country
    ? countryStateMap[formData.country] || []
    : [];

  return (
    <section className={`exclusive ${className}`}>
      <div className="e-text">
        <p className="second">{data.description1}</p>
        <p className="second">{data.description2}</p>

        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="addressLine1"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleInputChange}
              placeholder="Address Line 1"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="aptSuite"
              name="aptSuite"
              value={formData.aptSuite}
              onChange={handleInputChange}
              placeholder="Apt # / Suite"
            />
          </div>

          <div className="form-multi-row">
            <div className="form-group">
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
                required
              />
            </div>

            <div className="form-group">
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                disabled={!formData.country}
                required
              >
                <option value="">Select State/Province</option>
                {availableStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                placeholder="Zip/Postal Code"
                required
              />
            </div>

            <div className="form-group">
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Country</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              placeholder="Message (Optional)"
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="receiveUpdates"
                checked={formData.receiveUpdates}
                onChange={handleInputChange}
              />
              Send me updates on new styles and special offers.
            </label>
          </div>

          <button
            type="submit"
            className="ring-sizer-btn"
            onClick={() => console.log("Free ring sizer requested")}
          >
            Request Free Ring Sizer
          </button>
        </form>
      </div>
      <div className="sol-img">
        <img src={data.imgUrl} alt={data.alt} />
      </div>
    </section>
  );
};

export default CollectionWithForm;
