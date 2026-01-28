// Coding Challenge - React Component
// Build a simple temperature converter component that:

// Has an input field for Celsius
// Automatically displays the Fahrenheit conversion below it
// Updates in real-time as the user types

import { useState } from "react";

export const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCelsius(event.target.value);
  };

  const celsiusNum = parseFloat(celsius);
  const fahrenheit = ((celsiusNum * 9) / 5 + 32).toFixed(1);

  return (
    <div>
      <h1>Temperature Converter component</h1>
      <div>
        <input
          placeholder="Enter Celsius"
          type="number"
          value={celsius}
          onChange={handleChange}
        />
      </div>
      <p>In Farenheit: {celsius === "" ? "" : `${fahrenheit}`}</p>
    </div>
  );
};
