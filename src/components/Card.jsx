import React from "react";

const Card = ({ user, innerRef }) => {
  return (
    <>
      <div ref={innerRef} className="card" style={{ display: "flex" }}>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  style={{ borderRadius: "50%" }}
                  src={user.picture.medium}
                  alt="Placeholder"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{user.name.first}</p>
              <p className="subtitle is-6">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
