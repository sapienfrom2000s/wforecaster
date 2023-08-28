import forecastData from './forecast_fetcher';

function display(forecastData){
}

function search(term) {
  const forecast = forecastData(term);
  display(forecast);
}

function searchListener() {
  document.getElementById('#search').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = document.querySelector('.search > form > input');

    search(searchTerm);
  });
}
