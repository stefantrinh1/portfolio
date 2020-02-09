import React from "react";
import { Link } from "react-router-dom";
export default () => (
  <section style={{ textAlign: "center", padding: "2em" }}>
    <h2 style={{ marginBottom: "2em" }}>
      Opps, The Page Could Not be loaded
    </h2>
    <h3 style={{ marginBottom: "2em" }}>Please Try Again Later</h3>
    <div style={{ marginBottom: "2em" }}>
      <svg
        width="228px"
        height="228px"
        viewBox="0 0 228 228"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 114C0 51.0395 51.0395 0 114 0C176.96 0 228 51.0395 228 114C228 176.96 176.96 228 114 228C51.0395 228 0 176.96 0 114Z"
          id="Ellipse"
          fill="#FFB300"
          stroke="none"
        />
        <path
          d="M0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11Z"
          transform="translate(57 64)"
          id="Ellipse-2"
          fill="#000000"
          stroke="none"
        />
        <path
          d="M0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11Z"
          transform="translate(146 64.00006)"
          id="Ellipse-3"
          fill="#000000"
          stroke="none"
        />
        <path
          d="M0 19C0 8.50659 14.9985 0 33.5 0C52.0015 0 67 8.50659 67 19C67 29.4934 52.0015 38 33.5 38C14.9985 38 0 29.4934 0 19Z"
          transform="translate(79 136)"
          id="Ellipse-4"
          fill="#000000"
          stroke="none"
        />
      </svg>
    </div>

    <Link to="/"><u>Return to Homepage</u></Link>
  </section>
);
