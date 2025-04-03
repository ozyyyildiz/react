import { useState, useEffect } from "react";

import Header from "./components/Header.jsx";
import Invesinput from "./components/Invesinput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [formData, setFormData] = useState({
    initialInvestment: undefined,
    annualInvestment: undefined,
    expectedReturn: undefined,
    duration: undefined,
  });

  const inputValid = formData.duration >= 1;

  function handleChange(name, value) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: +value,
      };
    });
  }

  return (
    <>
      <Header />
      <div id="user-input">
        <div className="input-group">
          <Invesinput
            id="initialInvestment"
            label="Initial Investment"
            onChange={handleChange}
          />
          <Invesinput
            id="annualInvestment"
            label="Annual Investment"
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <Invesinput
            id="expectedReturn"
            label="Expected Return"
            onChange={handleChange}
          />
          <Invesinput id="duration" label="Duration" onChange={handleChange} />
        </div>
      </div>
      {!inputValid && <p className="center">Please enter a duration greater then zero. Or leave this website. Please.</p> }
      {inputValid && <Results input={formData} />}
    </>
  );
}

export default App;
