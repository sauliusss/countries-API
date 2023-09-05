// ==============================3 attempt==================================================
let countryinfo = document.querySelector(".country-info");
let searchBtn = document.querySelector("button");
let searchCountry = document.querySelector("#country-name");
let flag = document.querySelector(".flag");
let countryNAME = document.querySelector(".country-name");
let capital = document.querySelector(".capital");
let continent = document.querySelector(".continent");
let population = document.querySelector(".population");
let currency = document.querySelector(".currency");
let language = document.querySelector(".language");

let country = function () {
  let countryName = searchCountry.value;
  let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  getUrl();
  notEmpty();
  async function getUrl() {
    const response = await fetch(finalUrl);
    const data = await response.json();

    // make flag img
    let img = document.createElement("img");
    img.src = `${data[0].flags.svg}`;
    let src = document.querySelector(".flag");
    src.appendChild(img);
    //     // country name
    countryNAME.textContent = `${data[0].name.common}`;
    //     // capital
    capital.textContent = `Capital: ${data[0].capital[0]}`;
    //     // continent
    continent.textContent = `Continent: ${data[0].continents[0]}`;
    //     // population
    population.textContent = `Population: ${data[0].population}`;
    //     // currency
    currency.textContent = `Currency: ${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}`;
    //     // language
    language.textContent = `Language: ${Object.values(data[0].languages).toString().split(",").join(", ")}`;
  }
};

// catch error
let notEmpty = function () {
  if (searchCountry.lenght === 0) {
    countryinfo.textContent = `The input field cannot be empty`;
  } else {
    countryinfo.textContent = `Please enter a valid country name`;
  }
};

searchBtn.addEventListener("click", country);

// ==============================2 attempt==================================================
// let searchBtn = document.querySelector("button");
// let searchCountry = document.querySelector("#country-name");
// let flag = document.querySelector(".flag");
// let countryNAME = document.querySelector(".country-name");
// let capital = document.querySelector(".capital");
// let continent = document.querySelector(".continent");
// let population = document.querySelector(".population");
// let currency = document.querySelector(".currency");
// let language = document.querySelector(".language");

// searchBtn.addEventListener("click", function () {
//   let countryName = searchCountry.value;
//   let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
//   getUrl();

//   async function getUrl() {
//     const response = await fetch(finalUrl);
//     const data = await response.json();
//     console.log(data);
//     // make flag img
//     let img = document.createElement("img");
//     img.src = `${data[0].flags.svg}`;
//     let src = document.querySelector(".flag");
//     src.appendChild(img);
//     // country name
//     countryNAME.textContent = `${data[0].name.common}`;
//     // capital
//     capital.textContent = `Capital: ${data[0].capital[0]}`;
//     // continent
//     continent.textContent = `Continent: ${data[0].continents[0]}`;
//     // population
//     population.textContent = `Population: ${data[0].population}`;
//     // currency
//     currency.textContent = `Currency: ${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}`;
//     // language
//     language.textContent = `Language: ${Object.values(data[0].languages).toString().split(",").join(", ")}`;
//   }
// });

// =========================3 attempt=================================================
// let searchBtn = document.querySelector("button");
// let searchCountry = document.querySelector("#country-name");
// let flagBar = document.querySelector(".flag-bar");

// // add event listener

// searchBtn.addEventListener("click", function () {
//   let countryName = searchCountry.value;
//   // Set country name in finalUrl
//   let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
//   console.log(finalUrl);
//   fetch(finalUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       console.log();
//       // console.log(data[0].capital[0]);
//       // console.log(data[0].continents[0]);
//       // console.log(data[0].population);
//       // console.log(Object.keys(data[0].currencies)[0]);
//       // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
//       // console.log(Object.values(data[0].languages).toString().split(",").join(", "));
//       flagBar.innerHTML = `
//       <img src="${data[0].flags.svg}"
//       class="flag">
//       <div class="country-name">
//       <h2>${data[0].name.common}</h2>
//       </div>
//       <div class="country-info">
//         <div class="capital"><h2>Capital: ${data[0].capital[0]}</h2></div>
//         <div class="continent">
//         <h2>Continent: ${data[0].continents[0]}</h2>
//         </div>
//         <div class="population">
//         <h2>Population: ${data[0].population}</h2>
//         </div>
//         <div class="currency">
//         <h2>Currency: ${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</h2>
//         </div>
//         <div class="language">
//         <h2>Language: ${Object.values(data[0].languages).toString().split(",").join(", ")}</h2>
//         </div>
//       </div>

// `;
//     })
//     .catch(() => {
//       if (searchCountry.lenght === 0) {
//         flagBar.innerHTML = `<h3>The input field cannot be empty</h3>`;
//       } else {
//         flagBar.innerHTML = `<h3>Please enter a valid country name</h3>`;
//       }
//     });
// });
