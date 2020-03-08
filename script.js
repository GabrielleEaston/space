const button = document.querySelector('#btn');
const container = document.querySelector('.container');
const api_key = '0oFslsB2k74JzxNJf3hsTVVXyYvvcHtBuvjF1c2B';
const web_url = 'https://api.nasa.gov/planetary/apod?api_key=0oFslsB2k74JzxNJf3hsTVVXyYvvcHtBuvjF1c2B';
const userInput = document.querySelector('#search');
// https://images-api.nasa.gov
button.addEventListener('click', async () => {
  const input = userInput.value;
  //const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=0oFslsB2k74JzxNJf3hsTVVXyYvvcHtBuvjF1c2B');
  //const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=0oFslsB2k74JzxNJf3hsTVVXyYvvcHtBuvjF1c2B');
  //const response = await axios.get('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0');
  //const response = await axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=0oFslsB2k74JzxNJf3hsTVVXyYvvcHtBuvjF1c2B');
  const response = await axios.get(`https://images-api.nasa.gov/search?q=${input}&media_type=image`);


  debugger;

  container.innerHTML = `
   <img src=${response.data.url}>
   `
  // container.innerHTML = `
  // <img src=${response.data.photos[4].img_src}>
  // `

})