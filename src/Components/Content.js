import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ServicesPage from './Pages/ServicesPage';
import NewsPage from './Pages/NewsPage';
import BlogsPage from './Pages/BlogsPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';

const Content = () => {
	return (
		<>
			<Routes>
				<Route path='/home' Component={HomePage} index>
				</Route>
				<Route path='/services' Component={ServicesPage}>
				</Route>
				<Route path='/news' Component={NewsPage}>
				</Route>
				<Route path='/blogs' Component={BlogsPage}>
				</Route>
				<Route path='/about' Component={AboutPage}>
				</Route>
				<Route path='/contact' Component={ContactPage}>
				</Route>
			</Routes>
		</>
	);
};

export default Content;
