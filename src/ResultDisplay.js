import React from "react";

const ResultDisplay = ({ result }) => {
  return (
    <div
      style={{
        fontSize: "24px",
        fontWeight: "bold",
        background: "#f0f0f0",
        padding: "20px",
        borderRadius: "10px",
        width: "200px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {result}
    </div>
  );
};

export default ResultDisplay;
