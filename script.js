document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const city = document.getElementById('city').value;
    const apiKey = '61d1697935c5a1d1c11d5f98171acebc'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    // Fetch weather data
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          const weatherInfo = `
            <h2>Weather in ${data.name}, ${data.sys.country}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
          `;
          document.getElementById('weather-result').innerHTML = weatherInfo;
          document.getElementById('weather-result').style.display = 'block';
        } else {
          document.getElementById('weather-result').innerHTML = `<p>City not found. Please try again.</p>`;
          document.getElementById('weather-result').style.display = 'block';
        }
      })
      .catch(error => {
        document.getElementById('weather-result').innerHTML = `<p>Unable to fetch weather data. Please try again later.</p>`;
        document.getElementById('weather-result').style.display = 'block';
      });
  });
  