import { WeatherCard } from './WeatherCard';

export function WeatherCards({ cities, images }): JSX.Element {
	// console.log('cities', {...cities});

	return (
		<div className='weather-container'>
			{
				cities.length > 1 ? 

				cities.map((city, index: number) => (
				<WeatherCard key={index} {...city} image={images[index]} />
				))
				: 
				<WeatherCard {...cities[0]} image={images[0]} />
			}
		</div>
	)
}