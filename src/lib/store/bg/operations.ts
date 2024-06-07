const cityName = "Kyiv";
const appID = "576858";
const unsplashAccessKey = "E0oKcPW4cApaHHWBY_5ebYa22BpqpIE8PhXpXqRsJis";
const unsplashSecretKey = "33EVtwRE0NzQwEBaUvAYpumO8ZvyKP1u4ByWmrOIrOE";

const apiUrl = `https://api.unsplash.com/search/photos?query=${cityName}&client_id=${unsplashAccessKey}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Extract the image URL from the response
    const imageUrl = data.results[0].urls.regular;

    // Set the background image of your app
    document.body.style.backgroundImage = `url('${imageUrl}')`;
  })
  .catch((error) => {
    console.error("Error fetching image:", error);
  });
