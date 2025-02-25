import React from "react";

const CollectionCards = ({
  data,
  containerClass="",
  cardClass="",
  imageClass="",
  headingTag: Heading="h1",
  textClass="",
}) => {
  return (
    <div className={containerClass}>
      {data.map((section, index) => (
        <div key={index} className={cardClass}>
          <div className="jwl-collections-image">
            <img
              src={section.imgUrl}
              alt={section.alt}
              className={imageClass}
            />
          </div>
          <Heading className={textClass}>{section.title}</Heading>
          <p className={textClass}>{section.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CollectionCards;
