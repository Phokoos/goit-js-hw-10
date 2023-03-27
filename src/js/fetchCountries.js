'use strict';

//  find and return dates from API

export function fetchCountries(countryName) {
	// Make export using name!
	// file fields which i want
	const BASE_URL = `https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,population,flags,languages`;

	return fetch(`${BASE_URL}`)
		.then(res => {
			if (!res.ok) {
				throw new Error(res.status);
			}
			return res.json();
	})
}