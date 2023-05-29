import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>Error 404:<br></br>Page Not Found!</h1>
      <p>The requested page does not exist.</p>
      <div className="redirect-button-container">
        <Link to="/" className="redirect-button">Go to Homepage</Link>
      </div>
    </div>
  );
};

export default NotFound;
