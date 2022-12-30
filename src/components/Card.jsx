import React from "react";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqYUSW_pWNcGJ0SvaJ-nS8dgtgZe7ZqDtIg&usqp=CAU"
                  alt="Placeholder"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">John Smith</p>
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
