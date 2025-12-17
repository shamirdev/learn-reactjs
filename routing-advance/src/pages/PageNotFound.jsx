import React from "react";
import "../styles/PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="pagenotfound">
      <div className="container">
        <h1>404</h1>
        <h2>Oops, Page Not Found</h2>
        <p>Page that you're looking for isn't found</p>
        <button className="btn">Go Back</button>
      </div>
    </div>
  );
};

export default PageNotFound;
