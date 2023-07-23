import { useEffect, useState } from 'react';
import { getData } from '../api/getData';

export function ForecastCard({ city }) {
	const [weatherData, setWeatherData] = useState(null);
	console.log('ForecastCard', city);

	async function getForecastData () {
		await getData(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}`, `&q=${city}`, '&days=7').then(res => setWeatherData(res))
	};
	useEffect(() => {
		getForecastData();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [city]);



	console.log('weather data', weatherData);

	return (
		<h2>Forecast Card</h2>
	)
}