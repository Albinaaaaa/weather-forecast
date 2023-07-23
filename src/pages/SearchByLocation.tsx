import { Country, City } from 'country-state-city';
import {useEffect, useState } from 'react';
import Select from 'react-select';
import { getData, getImage } from '../api/getData';
import { WeatherCards } from '../components/WeatherCards';
// import { ForecastCards } from '../components/ForecastCards';

interface Option {
  value: string;
  label: string;
}

const countriesOptions: Option[] = [];
const allCountries = Country.getAllCountries();
let allCities;
export const defImage = await getImage(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY_IMAGES}&min_height=400&image_type=photo&pretty=true&orientation=vertical`, `&q=cities_country`);

allCountries.forEach(country => {
	countriesOptions.push({value: country.isoCode, label: country.name})
})
///////////////////////////////////
export function SearchByLocation(): JSX.Element {
	const [selectedCounty, setSelectedCounty] = useState<object | null>(null);
	const [selectedCities, setSelectedCities] = useState<any>([]);
	const [selectedCity, setSelectedCity] = useState('');
	const [weatherCityData, setWeatherCityData] = useState(null);
	const [cityImage, setCityImage] = useState(defImage);
	const [value, setValue] = useState(null);
	
	let isShowingCountriesSelect: boolean = false;
	
	if (selectedCounty !== null) {
		isShowingCountriesSelect = true;
	}

	async function weatherHandler(city) {
		console.log('set new image');
		await getImage(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY_IMAGES}&min_height=400&image_type=photo&pretty=true&orientation=vertical`, `&q=${city}`).then(res => setCityImage(res));
		if (city === 'Kyiv') {
			await getData(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}`, `&q=Kiev`).then(res => setWeatherCityData(res)).catch(error => console.log(error));
		} else {
			await getData(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}`, `&q=${city}`).then(res => setWeatherCityData(res)).catch(error => console.log(error));
		}
	}

	function handleChangeCountry(selectedOption: any) {
		isShowingCountriesSelect = false;
		setSelectedCounty(selectedOption);
		setValue('');
		setWeatherCityData(null);
		setCityImage(defImage);
		setSelectedCities(City.getCitiesOfCountry(selectedOption.value));
		allCities = City.getCitiesOfCountry(selectedOption.value).map(city => ({
			label: city.name,
			value: city.countryCode
	}));
	};

	async function handleChangeCity(selectedOption: any) {
		setWeatherCityData(null);
		setValue(selectedOption);
		weatherHandler(selectedOption.label);
		setSelectedCity(selectedOption.label);
	};

	useEffect(() => {
		if (selectedCounty) {
		const selectedCountryArr = Object.values(selectedCounty);
			allCities = City.getCitiesOfCountry(selectedCountryArr[0]).map(city => ({
				value: city.countryCode,
				label: city.name}
			))
		setSelectedCities(allCities);
		} else {
		setSelectedCities([]);
		}
	}, [selectedCounty]);

	return (
		<>
			<h1>Search by location page</h1>
			<h3>Select the Country</h3>
			<Select
				options={countriesOptions}
				onChange={handleChangeCountry}
				autoFocus={true}
			/>

			{isShowingCountriesSelect ?
				<>
					<h3>Select the City</h3>
					<Select
						options={selectedCities}
						autoFocus={true}
						value={value}
						onChange={handleChangeCity}
					/>
				</> : null
			}

			{weatherCityData && <WeatherCards cities={[weatherCityData]} images={[cityImage]} />}
			{/* {selectedCity && <ForecastCards city={selectedCity} />} */}
		</>
	)
}