const apiKey = '4ae04986f307408ba4222015240104';
        const apiUrl = 'https://api.weatherapi.com/v1/current.json?q=Hanoi&key=' + apiKey;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
              
                displayWeather(data);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });

        function displayWeather(data) {
            const weatherData = document.getElementById('weatherData');

            const location = data.location.name;
            const tempC = data.current.temp_c;
            const tempF = data.current.temp_f;
            const condition = data.current.condition.text;
            const icon = data.current.condition.icon;

            const weatherHTML = `
                <p>Địa điểm: ${location}</p>
                <p>Nhiệt độ: ${tempC}°C (${tempF}°F)</p>
                <p>Tình trạng: ${condition}</p>
                <img src="${icon}" alt="Weather icon">
            `;

            weatherData.innerHTML = weatherHTML;
        }
