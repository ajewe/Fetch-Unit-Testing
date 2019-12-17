let beerArr = [];

window.onload = function () {
  getApi();
}

const getApi = () => {
  fetch (`https://api.punkapi.com/v2/beers?page=2&per_page=80`)
  .then(res => res.json())
  .then(beer => beerArr = beer)
}

console.log(beerArr);

const clicked = () => {
  console.log('click click click');

  beerArr.map((beer) => {
    const mainArea = document.getElementById('main');
    const p = document.createElement('p');
    const text = document.createTextNode(`name: ${beer.name}`);

    p.append(text)
    mainArea.append(p);
  })



}

//building two tests for this simple app; 1 for a single beer and 1 for 10 beers.

describe ('fnx', () => {
  it ('pulls in 1 ')
})

//You should end up with a simple GUI app that has at least two unit test 
//injected into your fetch request.