import {useLoaderData } from 'react-router-dom';
import { getData, getImage } from '../api/getData';
import { CitiesLoaderData } from '../types/CitiesLoaderData';
import { City } from '../types/CityType';
import { WeatherCards } from '../components/WeatherCards';

export function Main(): JSX.Element {
	const {kyiv, kyivImage, london, londonImage, tbilisi, tbilisiImage} = useLoaderData() as CitiesLoaderData;
	const cities = [kyiv, london, tbilisi];
	const images = [kyivImage, londonImage, tbilisiImage];

	return (
		<>
			<h1>Main page</h1>
			<WeatherCards cities={cities} images={images} />
		</>
	)
}

export async function mainLoader(): Promise<CitiesLoaderData> {
	const kyiv: City = await getData(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}`, '&q=Kiev');
	const kyivImage = await getImage(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY_IMAGES}&min_height=400&image_type=photo&pretty=true&orientation=vertical`, '&q=Kyiv');

	const london: City = await getData(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}`, '&q=London');
	const londonImage = await getImage(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY_IMAGES}&min_height=400&image_type=photo&pretty=true&orientation=vertical`, '&q=London');


	const tbilisi: City = await getData(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}`, '&q=Tbilisi');
	const tbilisiImage = await getImage(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY_IMAGES}&min_height=400&image_type=photo&pretty=true&orientation=vertical`, '&q=Tbilisi');


	return { kyiv, kyivImage, london, londonImage, tbilisi, tbilisiImage };
}

