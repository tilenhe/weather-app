let weather = {};
const input = document.getElementById("search");
const submit = document.getElementById("submit");
const div = document.querySelector("div");
submit.addEventListener("click", getData);

async function getData(e) {
  e.preventDefault();
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&APPID=512f732a2036f5fd0ed45914fe1daf90`
  );
  const data = await response.json();
  console.log(data);
  let temp = await (data.main.temp -= 273.15);
  temp = await Math.round(temp);
  weather = {
    name: data.name,
    temp: temp,
    country: data.sys.country,
    main: data.weather[0].main
  };
  div.innerHTML = `<h2>${weather.name}, ${weather.country}</h2><p>${weather.temp}°</p><p>${weather.main}</p>`;
  console.log(weather);
}
