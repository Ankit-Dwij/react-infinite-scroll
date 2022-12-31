import React, { useState, useRef, useCallback } from "react";
import Card from "../components/Card";
import useGetUsers from "../hooks/useGetUsers";

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
        alignItems: "center",
        margin: "auto",
      }}
    >
      <h1>Home</h1>
      {users.map((user, index) => {
        if (users.length === index + 1) {
          return (
            <Card
              innerRef={lastUserCardRef}
              key={user.id.value + user.name.first}
              name={user.name.first}
              email={user.email}
              image={user.picture.thumbnail}
            />
          );
        } else {
          return (
            <Card
              key={user.id.value + user.name.first}
              name={user.name.first}
              email={user.email}
              image={user.picture.thumbnail}
            />
          );
        }
      })}
      {loading && <h1>Loading...</h1>}
      {error && <div>Error</div>}
    </div>
  );
};

export default Home;
