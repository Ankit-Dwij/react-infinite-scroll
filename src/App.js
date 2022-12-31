// import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [loggedIn, setloggedIn] = useState(false);
  function callbackFunction(childData) {
    setloggedIn(childData);
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to={"/login"} />} />
        <Route
          path="/login"
          element={
            loggedIn ? (
              <Navigate replace to={"/home"} />
            ) : (
              <Login parentCallback={callbackFunction} />
            )
          }
        />
        <Route
          path="/home"
          element={loggedIn ? <Home /> : <Navigate replace to={"/login"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
