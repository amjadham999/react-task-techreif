import '../../assets/css/home.css';
import HeaderImg from '../../assets/images/home_header_img.svg';
import SectionIntro from '../Sections/SectionIntro';
import ServicesSection from '../Sections/ServicesSection';
import ProjectSection from '../Sections/ProjectSection';
import StrategySection from '../Sections/StrategySection';
import FactsSection from '../Sections/FactsSection';
import FAQs from '../Sections/FAQs';

let HomeData = {
	servicesIntroData: {
		title: 'Our Services',
		parag:
			'The Service We Offer Is Specifically Designed \nTo Meet Your Needs.',
	},
	projectsIntroData: {
		title: 'Our Projects',
		parag: 'You Can See Our Projects',
	},
	strategyIntroData: {
		title: 'Our Strategy',
		parag: 'Amet Minim Mollit Non Deserunt Ullamco Est \nSit Aliqua Dolor',
	},
	factsIntroData: {
		title: 'Company Facts',
		parag:
			'The Service We Offer Is Specifically Designed \nWe Are Proud Of	Our Design Team',
	},
	customersIntroData: {
		title: 'Happy Customers',
		parag: 'We Are Proud Of Our Design Team',
	},
	faqsIntroData: {
		title: 'Frequently asked questions',
		parag:
			'The Service We Offer Is Specifically Designed \nWe Are Proud Of	Our Design Team',
	},
	eventsIntroData: {
		title: 'This just happened',
		parag:
			'Amet Minim Mollit Non Deserunt Ullamco Est \nSit Aliqua Dolor Do Amet Sint',
	},
};

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
				<SectionIntro data={HomeData.servicesIntroData} />
				<ServicesSection />
			</div>
			{/* <!-- Projects --> */}
			<div className='container my-5'>
				<SectionIntro data={HomeData.projectsIntroData} />
				<ProjectSection />
			</div>
			{/* <!-- Strategy --> */}
			<div className='container my-5 strategy justify-content-center'>
				<SectionIntro data={HomeData.strategyIntroData} />
				<StrategySection />
			</div>
			{/* <!-- Facts --> */}
			<div className='container my-5 p-4'>
				<div className='container py-5 custom-bg-light rounded-3'>
					<SectionIntro data={HomeData.factsIntroData} />
					<FactsSection />
				</div>
			</div>
			{/* <!-- Customers --> */}
			<div className='container my-5 strategy justify-content-center'>
				<SectionIntro data={HomeData.customersIntroData} />
			</div>
			{/* <!-- FAQs --> */}
			<div className='container my-5 frequently'>
				<SectionIntro data={HomeData.faqsIntroData} />
				<FAQs />
			</div>
			{/* <!-- Events --> */}
			<div className='container my-5'>
				<SectionIntro data={HomeData.eventsIntroData} />
			</div>
		</>
	);
};

export default HomePage;
