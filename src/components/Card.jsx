import React from "react";

const Card = ({ name, email, image, innerRef }) => {
  return (
    <>
      <div ref={innerRef} className="card" style={{ display: "flex" }}>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  style={{ borderRadius: "50%" }}
                  src={image}
                  alt="Placeholder"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{name}</p>
              <p className="subtitle is-6">{email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
