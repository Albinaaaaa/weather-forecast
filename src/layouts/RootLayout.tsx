import { Link, Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';

export function RootLayout(): JSX.Element {
	const {state} = useNavigation();

	const isLoading = state === 'loading';

	return (
		<>
			<nav>
				<div>Weather forecast</div>
				<ul>
					<li>
						<Link to="/main">Main</Link>
					</li>
					<li>
						<Link to="/search-by-location">Search by location</Link>
					</li>
				</ul>
			</nav>
			<ScrollRestoration />
			{isLoading && <h1>Loading ...</h1>}
			<Outlet />
		</>
	)
}