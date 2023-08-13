import '../assets/css/utilites.css';
import '../assets/css/common.css';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<Content />
			<Footer />
		</>
	);
}

export default MainLayout;