import { useEffect, useState } from 'react';
import { Link, Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';

export function RootLayout(): JSX.Element {
	const { state } = useNavigation();
	const [position, setPosition] = useState(window.pageYOffset);
	const [visible, setVisible] = useState(true);

	useEffect(()=> {
        const handleScroll = () => {
           let moving = window.pageYOffset
           
           setVisible(position > moving);
           setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
	})
	
	const cls = visible ? "visible" : "hidden";

	const isLoading = state === 'loading';

	return (
		<div className='app'>
			<header className={`header ${cls}`}>
				<nav className='header__nav'>
					<h2 className='header__title'>Weather forecast</h2>
					<ul className='header__list'>
						<li className='header__item'>
							<Link className='header__link' to="/main">Main</Link>
						</li>
						<li className='header__item'>
							<Link className='header__link' to="/search-by-location">Search by location</Link>
						</li>
					</ul>
				</nav>
			</header>
			<ScrollRestoration />
			{isLoading && <h1>Loading ...</h1>}
			<Outlet />
		</div>
	)
}