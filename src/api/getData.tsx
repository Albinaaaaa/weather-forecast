import axios from 'axios';

export function getData(url: string, city: string = '', days: string = '') {
	console.log(url+city+days);
	return axios
		.get(url + city + days)
		.then(res => res.data);
		// .then(() => console.log(url, city, days));
}

export function getImage(url: string, city: string) {
	return axios
		.get(url + city)
		.then(res => res.data);
}