import {useLoaderData } from 'react-router-dom';
import { getData } from '../api/getData';
import { CitiesLoaderData } from '../types/CitiesLoaderData';

export function Main(): JSX.Element {
	const {kyiv, london, tbilisi} = useLoaderData() as CitiesLoaderData;
	console.log('kyiv: ', kyiv);
	console.log('london: ', london);
	console.log('tbilisi: ', tbilisi);

	return (
		<>
			<h1>Main page</h1>
			{/* <div>
				<h2>{data.location.country.toString()} {data.location.name.toString()}</h2>
			</div> */}
		</>
	)
}

export async function mainLoader(): Promise<CitiesLoaderData> {
	const kyiv = await getData(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}`, '&q=Kiev');

	const london = await getData(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}`, '&q=London');

	const tbilisi = await getData(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}`, '&q=Tbilisi');

	return { kyiv, london, tbilisi };
}

