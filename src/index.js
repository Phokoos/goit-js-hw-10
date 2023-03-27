import './css/styles.css';

// Import Debounce
import debounce from 'lodash.debounce';
// Import Notiflix
import Notiflix from 'notiflix';

import {fetchCountries} from './js/fetchCountries.js';

// find field with input#search-box

const inputFieldEl = document.querySelector("#search-box");
const countryListEl = document.querySelector(".country-list")
const countryDivEl = document.querySelector(".country-info")
const bodyEl = document.querySelector("body");


const DEBOUNCE_DELAY = 300;

// part with styles

inputFieldEl.style.width = "400px";
// inputFieldEl.style.margin = "20px";
bodyEl.style.display = "flex";
bodyEl.style.alignItems = "center";
bodyEl.style.flexWrap = "wrap";
bodyEl.style.flexDirection = "column";




function imitationApi(country) {
	const countryGlobalTest = [
		{
			name: "Ukraine",
			src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png",
			capital: "Kyiv",
			population: "46000000",
			languages: "Ukrainian"
		},
		{
			name: "Great Britian",
			src: "https://cdn.britannica.com/25/4825-050-977D8C5E/Flag-United-Kingdom.jpg",
			capital: "London",
			population: "55000000",
			languages: "English"
		},
		{
			name: "Poland",
			src: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/800px-Flag_of_Poland.svg.png",
			capital: "Wrazlav",
			population: "36000000",
			languages: "Polish"
		},
	];	
	return countryGlobalTest;
};



// add event listener with debounce

inputFieldEl.addEventListener("input", debounce(addHtmlCode, DEBOUNCE_DELAY))

// if user cleanes field return err and clean HTML

function addHtmlCode() {
	// use trim()
	const inputValue = inputFieldEl.value.trim()

	if (inputValue === "") {
		countryListEl.innerHTML = "";
		countryDivEl.innerHTML = "";

		return Notiflix.Notify.success('Empry field');;
	}
	workWithResultFromApi(inputValue);
}

function workWithResultFromApi(countryName) {
	countryListEl.innerHTML = "";
	countryDivEl.innerHTML = "";
	const inputLength = countryName.length;

	const countryArrayFromApi = imitationApi();
	const countryArrayLength = countryArrayFromApi.length;

	if (countryArrayLength > 10) {
		return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
	}
	if (2 <= countryArrayLength && countryArrayLength <= 10) {
		const markup = countryArrayFromApi.map(({src , name}) => `<li style="display:flex;align-items:center;gap:10px;">
        <img src=${src} alt="" width="50px" />
        <p><b>${name}</b></p>
      </li>`).join("");

		return countryListEl.insertAdjacentHTML("beforeend", markup);
	}
	if (countryArrayLength === 1) {
		const markup = countryArrayFromApi.map(({ name, src, capital, population, languages }) =>
			`<div style="display: flex; align-items: center; gap: 10px; height:60px">
       	 <img src=${src} alt="" width="50px" />
      	  <p style="font-size: 40px"><b>${name}</b></p>
    	 	 </div>
     		 <ul>
        		<li><b>Capital:</b> ${capital}</li>
       		 <li><b>Population:</b> ${population}</li>
       		 <li><b>Languages:</b> ${languages}</li>
      	</ul>`
		).join("");
		return countryDivEl.insertAdjacentHTML("beforeend", markup);
	}
}

let countryName = "Ukraine";

const checkResult = (countryName) => {
	fetchCountries(countryName)
		.then((data) => {
		
		console.log(data[0].name.official);
	})
}

// checkResult(countryName.toLowerCase());