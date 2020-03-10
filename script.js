const api_key = '0oFslsB2k74JzxNJf3hsTVVXyYvvcHtBuvjF1c2B';
const web_url = 'https://api.nasa.gov/planetary/apod?api_key=0oFslsB2k74JzxNJf3hsTVVXyYvvcHtBuvjF1c2B';
const pod = document.querySelector('.hero');
const button = document.querySelector('#btn');
const userInput = document.querySelector('#search');
const planetContainer = document.querySelector('.planet-container');

// https://images-api.nasa.gov

const getPhotoOfTheDay = async () => {

  const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=0oFslsB2k74JzxNJf3hsTVVXyYvvcHtBuvjF1c2B");
  //debugger;
  //<img src="${response.data.url}">
  pod.style.background = `url("${response.data.url}")`
  pod.innerHTML =
    `<div class="text">
    <h1>${response.data.title}</h1>
    <button id="btn-read-more">Read more</button>
    <div id="hide">
    <p>${response.data.explanation}</p></div>
    </div>
    `
}
getPhotoOfTheDay();

const readMore = document.querySelector('#btn-read-more');
const hide = document.querySelector('#hide');
//console.log(hide);
readMore.addEventListener('click', () => {
  hide.style.display = "block";
})





button.addEventListener('click', async () => {
  const input = userInput.value;

  //   const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=0oFslsB2k74JzxNJf3hsTVVXyYvvcHtBuvjF1c2B');
  const response = await axios.get(`https://images-api.nasa.gov/search?q=${input}&media_type=image`);

  //const response = await axios.get('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0');
  //const response = await axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=0oFslsB2k74JzxNJf3hsTVVXyYvvcHtBuvjF1c2B');
  //const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=0oFslsB2k74JzxNJf3hsTVVXyYvvcHtBuvjF1c2B');


  //debugger;

  for (let i = 0; i < 6; i += 1) {
    planetContainer.innerHTML += `
    <div class="column">
      <img src=${response.data.collection.items[i].links[0].href}>
      <h4>${response.data.collection.items[i].data[0].title}</h4></div>
     `
  }
})


// container.innerHTML = `
//   //   //  <img src=${response.data.url}>
//   //   //  `
//   // container.innerHTML = `
//   // <img src=${response.data.photos[4].img_src}>
//   // `