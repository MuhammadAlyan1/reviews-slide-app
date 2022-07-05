import React from "react";
import ReactDOM from "react-dom/client";

// components
import ReviewsList from "./ReviewsList";

// css
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReviewsList />
  </React.StrictMode>
);
