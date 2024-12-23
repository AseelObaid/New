import React, { useState } from "react";
import ResultDisplay from "./ResultDisplay";

const App = () => {
  const [input, setInput] = useState("");  
  const [result, setResult] = useState(null);  


  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
       
        const evalResult = eval(input); 
        setResult(evalResult);  
      } catch (error) {
        setResult("Error");  
      }
    } else if (value === "C") {
      setInput(""); 
      setResult(null);  
    } else {
      setInput((prev) => prev + value);  
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <ResultDisplay result={result ?? input} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 50px)",
          gap: "10px",
          margin: "20px auto",
          width: "fit-content",
        }}
      >
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "=", "C"].map((button) => (
          <button
            key={button}
            onClick={() => handleButtonClick(button)}
            style={{ padding: "10px", fontSize: "18px", cursor: "pointer" }}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
