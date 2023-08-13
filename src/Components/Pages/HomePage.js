import '../../assets/css/home.css';
import HeaderImg from '../../assets/images/home_header_img.svg';
import Intro from '../Intro';
import ServicesSection from '../Sections/ServicesSection';
import ProjectsSection from '../Sections/ProjectsSection';
import StrategySection from '../Sections/StrategySection';
import FactsSection from '../Sections/FactsSection';
import FAQs from '../Sections/FAQs';
import data from '../../Data/HomeData';

const HomePage = () => {
	return (
		<>
			{/* <!-- Header --> */}
			<div className='container my-5'>
				<header className='row header'>
					{/* <!-- Header Intro --> */}
					<section className='col-lg mb-5 mb-lg-0 pt-xl-5'>
						<h1 className='header-title mb-4 mb-xl-5'>
							Secure <span className='title-highlight'>IT Solutions</span> For A
							More Secure Environment
						</h1>
						<p className='header-parag mb-4 mb-xl-5'>
							Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do
							Amet Sint Velit Officia Consequat Duis Enim Velit Mollit
							Exercitation Veniam Consequat Sunt Nostrud Amet.
						</p>
						<button className='custom-btn custom-btn-filled mt-2'>
							Get Started
						</button>
					</section>
					{/* <!-- Header Image --> */}
					<section className='col-lg d-flex justify-content-end'>
						<img src={HeaderImg} className='img-fluid' alt='Header' />
					</section>
				</header>
			</div>
			{/* <!-- Services --> */}
			<div className='container my-5'>
				<Intro data={data.servicesIntro} />
				<ServicesSection />
			</div>
			{/* <!-- Projects --> */}
			<div className='container my-5'>
				<Intro data={data.projectsIntro} />
				<ProjectsSection />
			</div>
			{/* <!-- Strategy --> */}
			<div className='container my-5 strategy justify-content-center'>
				<Intro data={data.strategyIntro} />
				<StrategySection />
			</div>
			{/* <!-- Facts --> */}
			<div className='container my-5 p-4'>
				<div className='container py-5 custom-bg-light rounded-3'>
					<Intro data={data.factsIntro} />
					<FactsSection />
				</div>
			</div>
			{/* <!-- Customers --> */}
			<div className='container my-5 strategy justify-content-center'>
				<Intro data={data.customersIntro} />
			</div>
			{/* <!-- FAQs --> */}
			<div className='container my-5 frequently'>
				<Intro data={data.faqsIntro} />
				<FAQs />
			</div>
			{/* <!-- Events --> */}
			<div className='container my-5'>
				<Intro data={data.eventsIntro} />
			</div>
		</>
	);
};

export default HomePage;
