const api_key = "0oFslsB2k74JzxNJf3hsTVVXyYvvcHtBuvjF1c2B";
const web_url =
  "https://api.nasa.gov/planetary/apod?api_key=0oFslsB2k74JzxNJf3hsTVVXyYvvcHtBuvjF1c2B";
const pod = document.querySelector(".hero");
const button = document.querySelector("#btn");
const planetContainer = document.querySelector(".planet-container");

//////////////////////////////////////////
//////////Get Photo of the day///////////
/////////////////////////////////////////
const getPhotoOfTheDay = async () => {
  const response = await axios.get(
    "https://api.nasa.gov/planetary/apod?api_key=0oFslsB2k74JzxNJf3hsTVVXyYvvcHtBuvjF1c2B"
  );

  pod.innerHTML = `<div><img src="${response.data.url}"></div>
    <div class="text">
    <h1>${response.data.title}</h1>
    <p>${response.data.explanation}</p>
    </div>
    `;
};
getPhotoOfTheDay();

////////////////////////////////////////////
//////api call to get images////////////////
///////////////////////////////////////////
button.addEventListener("click", async () => {
  const userInput = document.querySelector("#search");
  const input = userInput.value;
  const response = await axios.get(
    `https://images-api.nasa.gov/search?q=${input}&media_type=image`
  );
  console.log(response);
  let planets = response.data.collection;
  planetContainer.innerHTML = "";
  for (let i = 0; i < 20; i += 1) {
    planetContainer.innerHTML += `
    <div class="column">
      <img src=${response.data.collection.items[i].links[0].href}>
      
      <h4>${response.data.collection.items[i].data[0].title}</h4></div>
     `;
  }
});
