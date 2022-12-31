import React, { useState, useRef, useCallback } from "react";
import Card from "../components/Card";
import useGetUsers from "../hooks/useGetUsers";

function SkeletonCard() {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  className="skeleton"
                  src="https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey.png"
                  style={{ borderRadius: "50%", width: "48px", height: "48px" }}
                  alt="Placeholder"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
              </p>
              <p className="subtitle is-6">
                <div className="skeleton skeleton-text"></div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { users, hasMore, loading, error } = useGetUsers(null, pageNumber);
  const observer = useRef();

  const lastUserCardRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setTimeout(() => {
            setPageNumber((prev) => prev + 1);
          }, 1000);
        }
      },
      [loading, hasMore]
    );
    if (node) observer.current.observe(node);
  });

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "auto",
        height: "100vh",
      }}
    >
      <h1>Home</h1>
      <div style={{ overflowY: "auto", height: "100%" }}>
        {users.map((user, index) => {
          if (users.length === index + 1) {
            return (
              <Card
                innerRef={lastUserCardRef}
                key={user.id.value}
                user={user}
              />
            );
          } else {
            return <Card key={user.id.value} user={user} />;
          }
        })}
        {loading && (
          <div style={{ overflowY: "auto", height: "100%" }}>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        )}
      </div>
      {error && <div>Error</div>}
    </div>
  );
};

export default Home;
