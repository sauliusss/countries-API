let searchBtn = document.querySelector("button");
let searchCountry = document.querySelector("#country-name");

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
      console.log(data[0].capital[0]);
      console.log(data[0].continents[0]);
      console.log(data[0].population);
      console.log(Object.keys(data[0].currencies)[0]);
      console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      console.log(Object.values(data[0].languages).toString().split(",").join(", "));
      result.innerHTMl = `
      <img src="${data[0].flags.svg}"
      class="flag-img"
      `;
    });
});
