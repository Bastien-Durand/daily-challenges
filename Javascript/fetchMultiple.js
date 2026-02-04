// Question 7: Coding Challenge - Async Practice
// Write an async function called fetchMultipleCities that takes an array of city names and returns an array of their temperatures.
// Example:

const cities = ["Sydney", "London", "Tokyo"];

const API_KEY = "YOUR_API_KEY_HERE"; // Replace with your actual key

const fetchMultipleCities = async (cities) => {
  const temperatureArray = [];

  for (const city of cities) {
    const convertToUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`;

    const response = await fetch(convertToUrl);
    const result = await response.json();

    const { lat, lon } = result[0];

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    temperatureArray.push(weatherData.main.temp);
  }

  return temperatureArray; // Return, don't console.log
};

const temps = await fetchMultipleCities(cities);
console.log(temps);

// Should return something like: [22, 15, 18]
// Hints:

// You'll need to loop through cities
// Make an API call for each
// Extract just the temperature
// Return array of temperatures

// You can use the OpenWeatherMap API or just simulate it!
