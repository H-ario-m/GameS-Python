function getWeather() {
  const apiKey = '3fa916b42bfce07d8483560a882561ad';
  const city = document.getElementById('city').value.trim();

  if (!city) {
    alert('Please enter a city');
    return;
  }

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  // Fetch Current Weather
  fetch(currentWeatherUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Current Weather Data:', data);
      displayWeather(data);
    })
    .catch((error) => {
      console.error('Error fetching current weather data:', error);
      alert('Error fetching current weather data. Please check the city name and try again.');
    });

  fetch(forecastUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Hourly Forecast Data:', data); 
      displayHourlyForecast(data.list);
    })
    .catch((error) => {
      console.error('Error fetching hourly forecast data:', error);
      alert('Error fetching hourly forecast data. Please try again later.');
    });
}
