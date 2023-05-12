
import { Layout } from '../App';
import { createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from '../pages/Error/NotFoundPage';
import { HomePage } from '../pages/Home/HomePage';
import { AboutPage } from '../pages/About/AboutPage';
import { HotelsPage } from '../pages/Hotels/HotelsPage';
import { LastMinutePage } from '../pages/LastMinuteTours/LastMinutePage';


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "*",
                element: <NotFoundPage />
            },
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'about',
				element: <AboutPage />
			},
			{
				path: 'countries',
				element: <HotelsPage />
			},
			{
				path: 'last_minute_page',
				element: <LastMinutePage />
			}
      	]
    }
]);
