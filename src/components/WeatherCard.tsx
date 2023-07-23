import { useEffect, useState } from 'react';
import { defImage } from '../pages/SearchByLocation';

export function WeatherCard({ current, location, image }): JSX.Element {
	const [imageData, setImageData] = useState(image);
	useEffect(() => {
		if (image?.total === 0) {
			console.log('inside defImage', imageData);
			setImageData(defImage);
		}

		console.log('check', imageData.total === 0);
			console.log('inside after defImage', imageData);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [current]);

	const randomImageNum: number = Math.floor(Math.random() * imageData?.hits?.length);

	console.log('random num', randomImageNum);

	return (
		<div className='weather-card'>
			{imageData?.total === 0 ? null : <img className='weather-card__bg' src={imageData?.hits[randomImageNum]?.largeImageURL} alt={current.condition.text}></img>}
			
			<h2 className='weather-card__city-name'>{location.name}</h2>
			<h3 className='weather-card__temp'>{ current.temp_c}&deg; / { current.temp_f}&#8457;</h3>
			<div className='weather-card__info'>
				<p className='weather-card__condition'>{ current.condition.text}</p>
				<img className='weather-card__icon' src={current.condition.icon} alt={current.condition.text}/>
				<p>Fells like: { current.feelslike_c}&deg; / { current.feelslike_f}&#8457;</p>
			</div>
		</div>
 )
}