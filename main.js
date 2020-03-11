async function getData() {
  const response = await fetch(
    "api.openweathermap.org/data/2.5/weather?q=2172797&appid=512f732a2036f5fd0ed45914fe1daf90"
  );
  //const data = response.json();
  console.log(response);
}

getData();
