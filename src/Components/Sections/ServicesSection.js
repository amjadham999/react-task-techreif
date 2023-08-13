import serviceImg01 from '../../assets/images/home_services_img_01.svg';
import serviceImg02 from '../../assets/images/home_services_img_02.svg';
import serviceImg03 from '../../assets/images/home_services_img_03.svg';
import serviceImg04 from '../../assets/images/home_services_img_04.svg';

const ServicesSection = () => {
	return (
		<>
			<div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 justify-content-center'>
				<section className='col'>
					<div className='container-fluid d-flex justify-content-center align-items-center w-100 py-3 mb-4 custom-bg-light rounded-3'>
						<img src={serviceImg01} className='img-fluid' alt='Services' />
					</div>
					<div className='container-fluid p-0 pb-3'>
						<h5 className='custom-title-5 mb-3'>Digital Marketing</h5>
						<ul>
							<li className='custom-list-item custom-color-grey mb-1'>
								Google Ads
							</li>
							<li className='custom-list-item custom-color-grey mb-1'>
								Facebook Ads
							</li>
							<li className='custom-list-item custom-color-grey mb-1'>
								Instagram Ads
							</li>
							<li className='custom-list-item custom-color-grey mb-1'>
								Search Engine Optimization
							</li>
							<li className='custom-list-item custom-color-grey mb-1'>
								Infuencer Marketing
							</li>
						</ul>
						<div>
							<a href='#home' className='custom-link'>
								Learn More <i className='fa-solid fa-angle-right'></i>
							</a>
						</div>
					</div>
				</section>
				<section className='col'>
					<div className='container-fluid d-flex justify-content-center align-items-center w-100 py-3 mb-4 custom-bg-light rounded-3'>
						<img src={serviceImg02} className='img-fluid' alt='Services' />
					</div>
					<div className='container-fluid p-0 pb-3'>
						<h5 className='custom-title-5 mb-3'>
							Website Development & Design
						</h5>
						<ul>
							<li className='custom-list-item custom-color-grey mb-1'>
								Wordpress Development
							</li>
							<li className='custom-list-item custom-color-grey mb-1'>
								Ecommerce
							</li>
							<li className='custom-list-item custom-color-grey mb-1'>
								UI Design
							</li>
							<li className='custom-list-item custom-color-grey mb-1'>
								Copywriting
							</li>
							<li className='custom-list-item custom-color-grey mb-1'>
								Speed Optimization
							</li>
						</ul>
						<div>
							<a href='#home' className='custom-link'>
								Learn More <i className='fa-solid fa-angle-right'></i>
							</a>
						</div>
					</div>
				</section>
				<section className='col'>
					<div className='container-fluid d-flex justify-content-center align-items-center w-100 py-3 mb-4 custom-bg-light rounded-3'>
						<img src={serviceImg03} className='img-fluid' alt='Services' />
					</div>
					<div className='container-fluid p-0 pb-3'>
						<h5 className='custom-title-5 mb-3'>Software</h5>
						<ul>
							<li className='custom-list-item custom-color-grey mb-1'>
								Setting up CRM
							</li>
							<li className='custom-list-item custom-color-grey mb-1'>
								Software recommendation for a specific business type
							</li>
						</ul>
						<div>
							<a href='#home' className='custom-link'>
								Learn More <i className='fa-solid fa-angle-right'></i>
							</a>
						</div>
					</div>
				</section>
				<section className='col'>
					<div className='container-fluid d-flex justify-content-center align-items-center w-100 py-3 mb-4 custom-bg-light rounded-3'>
						<img src={serviceImg04} className='img-fluid' alt='Services' />
					</div>
					<div className='container-fluid p-0 pb-3'>
						<h5 className='custom-title-5 mb-3'>Graphic Design & Branding</h5>
						<ul className='custom-list-style-position-in'>
							<li className='custom-list-item custom-color-grey mb-1'>
								Brand Guidelines
							</li>
							<li className='custom-list-item custom-color-grey mb-1'>
								Brand Identity
							</li>
							<li className='custom-list-item custom-color-grey mb-1'>
								Color Pallete
							</li>
							<li className='custom-list-item custom-color-grey mb-1'>
								Social Media Designs
							</li>
							<li className='custom-list-item custom-color-grey mb-1'>
								Printables
							</li>
						</ul>
						<div className='container'>
							<a href='#home' className='custom-link'>
								Learn More <i className='fa-solid fa-angle-right'></i>
							</a>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default ServicesSection;
