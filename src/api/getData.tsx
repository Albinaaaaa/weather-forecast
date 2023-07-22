import axios from 'axios';

export function getData(url: string, city: string = '', days: string = '') {
	return axios
		.get(url + city + days)
		.then(res => res.data);
}

export function getImage(url: string, city: string) {
	return axios
		.get(url + city)
		.then(res => res.data);
}