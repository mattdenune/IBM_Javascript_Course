// apiKEY: e2769571a4070c0542ed8bab09862837

https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'e2769571a4070c0542ed8bab09862837'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const newApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${40.650002}&lon=${-73.949997}&appid=${apiKey}&units=metric`

    fetch(newApiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
        }).catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);