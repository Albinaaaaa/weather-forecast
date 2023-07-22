import {  Navigate, createBrowserRouter, useRouteError } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { Main, mainLoader } from './pages/Main';
import { SearchByLocation } from './pages/SearchByLocation';


export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{ index: true, element: <Navigate to="/main" />},
					{path: "main", element: <Main />, loader: mainLoader}
				]
			},
			{
				path: "search-by-location",
				element: <SearchByLocation />,
			},
			{path: "*", element: <h1>404 - Page Not Found</h1>}
		]
	}
])

function ErrorPage() {
	const error: Error = useRouteError() as Error;

	return (
		<>
			<h1>Error - Something went wrong</h1>
			<div>{error.message}</div>
		</>
	)
}