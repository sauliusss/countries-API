let searchBtn = document.querySelector("button");
let searchCountry = document.querySelector("#country-name");
let flagBar = document.querySelector(".flag-bar");

// add event listener

searchBtn.addEventListener("click", function () {
  let countryName = searchCountry.value;
  // Set country name in finalUrl
  let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalUrl);
  fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log();
      // console.log(data[0].capital[0]);
      // console.log(data[0].continents[0]);
      // console.log(data[0].population);
      // console.log(Object.keys(data[0].currencies)[0]);
      // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      // console.log(Object.values(data[0].languages).toString().split(",").join(", "));
      flagBar.innerHTML = `
      <img src="${data[0].flags.svg}"
      class="flag">
      <div class="country-name">
      <h2>${data[0].name.common}</h2>
      </div>
      <div class="country-info">
        <div class="capital"><h2>Capital: ${data[0].capital[0]}</h2></div>
        <div class="continent">
        <h2>Continent: ${data[0].continents[0]}</h2>
        </div>
        <div class="population">
        <h2>${data[0].population}</h2>
        </div>
        <div class="currency">
        <h2>${Object.keys(data[0].currencies)[0]}</h2>
        </div>
        <div class="language">
        <h2>${Object.values(data[0].languages).toString().split(",").join(", ")}</h2>
        </div>
      </div>

`;
    });
});
