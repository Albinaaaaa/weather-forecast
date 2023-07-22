import { useEffect, useState } from 'react';
import { getImage } from '../api/getData';

export function WeatherCard({ current, location, image }): JSX.Element {
	// console.log('render weather app', image);
	const [imageData, setImageData] = useState(image);
	// console.log('image WeatherCard  bf', imageData);
	// async function defImage() {
	// 	if (image.length === 0) {
	// 		// console.log('if');
	// 		await getImage(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY_IMAGES}&min_height=400&image_type=photo&pretty=true&orientation=vertical`, `&q=city`)
	// 			.then(res => setImageData(res));
	// 	}
		
	// 	setImageData(image);
	// 	};
	
	// console.log('image WeatherCard  af', imageData);
	
	// useEffect(() => {
	// 	// console.log('use effect');
	// 	// defImage();
	// // eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [image]);

	const randomImageNum: number = Math.floor(Math.random() * imageData?.hits?.length);

	return (
		<div className='weather-card'>
			{imageData?.length === 0 ? null : <img className='weather-card__bg' src={imageData?.hits[randomImageNum]?.largeImageURL} alt={current.condition.text}></img>}
			
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