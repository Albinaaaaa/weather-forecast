import { ForecastCard } from './ForecastCard';

export function ForecastCards({city}) {
	return (
		<>
			<h2>Forecast cards</h2>
			<ForecastCard city={city} />
		</>
	)
}