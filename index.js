let searchBtn = document.querySelector("button");
let searchCountry = document.querySelector("#country-name");

// add event listener

searchBtn.addEventListener("click", function () {
  let countryName = searchCountry.value;
  let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalUrl);
});
