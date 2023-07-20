import { Country, City, ICity } from 'country-state-city';
import {useEffect, useState } from 'react';
import Select, { InputActionMeta } from 'react-select';

const countriesOptions: Option[] = [];
const allCountries = Country.getAllCountries();
let allCities: ICity[] | undefined;

allCountries.forEach(country => {
	countriesOptions.push({value: country.isoCode, label: country.name})
})
interface Option {
  value: string;
  label: string;
}

export function SearchByLocation(): JSX.Element {
	const [selected, setSelected] = useState<object | null>(null);
	const [inputValue, setInputValue] = useState<string>('');
	const [citiesOptions, setCitiesOptions] = useState<Option[]>([]);
	
	let isShowingCountriesSelect: boolean = false;
	
	
	if (selected !== null) {
		isShowingCountriesSelect = true;
	}

	function handleChange (selectedOption: any) {
		isShowingCountriesSelect = false;
		allCities = City.getCitiesOfCountry(selectedOption.value);
		setSelected(selectedOption);
		allCities?.forEach(city => {
			citiesOptions.push({ value: city.countryCode, label: city.name });
		})
	};

	 useEffect(() => {
		if (selected) {
		const selectedCountryCode = Object.values(selected)[0];
		allCities = City.getCitiesOfCountry(selectedCountryCode);
		const cities = allCities.map(city => ({
			value: city.name,
			label: city.name
		}));
		setCitiesOptions(cities);
		} else {
		setCitiesOptions([]);
		}
	 }, [selected]);
	
	
	const handleBlur = (event) => {
		const blurValue = event.target.value;
		setInputValue(blurValue);
  	};

	return (
		<>
			<h1>Search by location page</h1>
			<h3>Select the Country</h3>
			<Select
				options={countriesOptions}
				onChange={handleChange}
				autoFocus={true}
			/>

			{isShowingCountriesSelect ?
				<>
					<h3>Select the City</h3>
					<Select
						options={citiesOptions}
						autoFocus={true}
						onBlur={handleBlur}
					/>
				</> : null
			}
		</>
	)
}