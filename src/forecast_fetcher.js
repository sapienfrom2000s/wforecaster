function weatherApiKey() {
  return '275b9c7aca4c41b9a96154929232508';
}

async function weatherData(location) {
  const forecast = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey()}&q=${location}&days=1&aqi=no&alerts=no`
  );
  const forecastJson = await forecast.json();

  return forecastJson;
}

export default weatherData;
