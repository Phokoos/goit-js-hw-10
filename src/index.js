import './css/styles.css';

import {fetchCountries} from './js/fetchCountries.js';

// find field with input#search-box

// add event listener with debounce

// if user cleanes field return err and clean HTML

// use trim()

// 



const DEBOUNCE_DELAY = 300;

let countryName = "Ukraine";

const checkResult = (countryName) => {
	fetchCountries(countryName)
		.then((data) => {
		
		console.log(data[0].name.official);
	})
}

checkResult(countryName.toLowerCase());
// checkResult(countryName);