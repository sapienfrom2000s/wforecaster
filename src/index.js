// eslint-disable-next-line import/extensions
import forecastFetcher from './forecast_fetcher.js';

function createParagraph() {
  const paragraph = document.createElement('p');
  return paragraph;
}

function createNodesFromData(forecastData) {
  const div = document.createElement('div');

  const p1 = createParagraph();
  p1.innerHTML = `${'Country:'.padEnd(13) + forecastData.location.country}`;

  const p9 = createParagraph();
  p9.innerHTML = `${'Location:'.padEnd(13) + forecastData.location.name}`;

  const p2 = createParagraph();
  p2.innerHTML = `${'Local Time:'.padEnd(10)} ${forecastData.location.localtime}`;

  const p3 = createParagraph();
  p3.innerHTML = `${'Min Temp:'.padEnd(11)} ${forecastData.forecast.forecastday[0].day.mintemp_c}°C`;

  const p4 = createParagraph();
  p4.innerHTML = `${'Max Temp:'.padEnd(10)} ${forecastData.forecast.forecastday[0].day.maxtemp_c}°C`;

  const p5 = createParagraph();
  p5.innerHTML = `${'Avg Temp:'.padEnd(11)} ${forecastData.forecast.forecastday[0].day.avgtemp_c}°C`;

  const p6 = createParagraph();
  p6.innerHTML = `${'Sunrise:'.padEnd(13)} ${forecastData.forecast.forecastday[0].astro.sunrise}`;

  const p7 = createParagraph();
  p7.innerHTML = `${'Sunset:'.padEnd(13)} ${forecastData.forecast.forecastday[0].astro.sunset}`;

  const p8 = createParagraph();
  p8.innerHTML = `${'Condition:'.padEnd(12)} ${forecastData.forecast.forecastday[0].day.condition.text}`;

  div.classList.add('forecastData');
  div
    .appendChild(p9)
    .appendChild(p1)
    .appendChild(p2)
    .appendChild(p8)
    .appendChild(p3)
    .appendChild(p4)
    .appendChild(p5)
    .appendChild(p6)
    .appendChild(p7);

  return div;
}

function createNodesFromError() {
  const div = document.createElement('div');

  const p1 = createParagraph();
  p1.innerHTML = 'No Data Found!';

  div.classList.add('forecastData');
  div
    .appendChild(p1);

  return div;
}

function display(forecastData) {
  const content = document.getElementById('content');
  content.replaceChildren(forecastData);
}

function search(term) {
  const forecastData = forecastFetcher(term);
  forecastData.then((response) => {
    const node = createNodesFromData(response);
    display(node);
  }).catch((error) => {
    const node = createNodesFromError(error);
    display(node);
  });
}

(function searchListener() {
  document.getElementById('search').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = document.querySelector('.search > form > input').value;

    search(searchTerm);
  });
}());
