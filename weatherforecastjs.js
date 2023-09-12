const apiKey = '16c6ab7c0404f3b716ad5c3d51c846bc';

// Function to fetch weather data from the API
const fetchWeatherData = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    // Extract relevant weather information from the API response
    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;

    // Update the HTML with the weather data
    const weatherDataElement = document.querySelector('.weather-data');
    weatherDataElement.innerHTML = `
      <h2>Weather in ${cityName}</h2>
      <p>Temperature: ${temperature}°C</p>
      <p>Weather Description: ${weatherDescription}</p>
    `;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    const weatherDataElement = document.querySelector('.weather-data');
    weatherDataElement.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
  }
};

// Call the fetchWeatherData function when the page loads
window.addEventListener('load', () => {
  fetchWeatherData();
});
