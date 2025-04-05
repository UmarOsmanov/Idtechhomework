const cityInput = document.getElementById("cityInput");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

const apiKey = 'eb5c9fedf58bcc005564ed4260803bb7';

cityInput.addEventListener("input", () => {
  const city = cityInput.value.trim();

  if (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=az`)
      .then(response => response.json())
      .then(data => {
        cityName.textContent = `${data.name}`;
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        description.textContent = data.weather[0].description;
      })
      .catch(error => {
        cityName.textContent = "Şəhər tapılmadı";
        temperature.textContent = "--";
        description.textContent = "Xəta baş verdi";
      });
  }
});

