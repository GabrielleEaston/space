///////////////////////////////////////////////
///////additional keys////////////////////////
/////////////////////////////////////////////
//const response = await axios.get('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0');
//const response = await axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=0oFslsB2k74JzxNJf3hsTVVXyYvvcHtBuvjF1c2B');
//const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=0oFslsB2k74JzxNJf3hsTVVXyYvvcHtBuvjF1c2B');
////////////////////////////////////////////
const api_key = '0oFslsB2k74JzxNJf3hsTVVXyYvvcHtBuvjF1c2B';
const web_url = 'https://api.nasa.gov/planetary/apod?api_key=0oFslsB2k74JzxNJf3hsTVVXyYvvcHtBuvjF1c2B';
const pod = document.querySelector('.hero');
const button = document.querySelector('#btn');

const planetContainer = document.querySelector('.planet-container');

//////////////////////////////////////////
//////////Get Photo of the day///////////
/////////////////////////////////////////
const getPhotoOfTheDay = async () => {
  const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=0oFslsB2k74JzxNJf3hsTVVXyYvvcHtBuvjF1c2B");
  // pod.style.background = `url("${response.data.url}")`
  pod.innerHTML =
    `<div><img src="${response.data.url}"></div>
    <div class="text">
    <h1>${response.data.title}</h1>
    <p>${response.data.explanation}</p>
    </div>
    `

}
getPhotoOfTheDay();


////////////////////////////////////////////
//////api call to get images////////////////
///////////////////////////////////////////
button.addEventListener('click', async () => {
  const userInput = document.querySelector('#search');
  const input = userInput.value;
  console.log(input);
  const response = await axios.get(`https://images-api.nasa.gov/search?q=${input}&media_type=image`);
  // debugger;
  console.log(input)
  console.log(response)
  console.log(response.data)
  for (let i = 0; i < 6; i += 1) {

    planetContainer.innerHTML += `
    <div class="column">
      <img src=${response.data.collection.items[i].links[0].href}>
      
      <h4>${response.data.collection.items[i].data[0].title}</h4></div>
     `
  }
});