import '../assets/css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	return (
		<>
			{/* <!-- Footer --> */}
			<footer className='container-fluid p-0 footer'>
				<div className='container px-4 py-5'>
					<div className='row g-2 justify-content-evenly justify-content-sm-between justify-content-md-end mb-5'>
						<div className='col-auto d-flex align-items-center'>
							<h6 className='footer-title m-0 me-0 me-sm-4 p-2'>
								Ready to get Started?
							</h6>
						</div>
						<div className='col-auto d-flex align-items-center'>
							<button className='footer-btn px-5 py-3'>Get Started</button>
						</div>
					</div>
					<div className='row g-5 justify-content-between mb-4 mb-xl-5'>
						<div className='col-12 col-sm-12 col-md-8 col-lg-6 col-xl-4'>
							<h6 className='footer-title d-inline-block m-0 mb-4 p-2'>
								Subscribe to our <br />
								newsletter
							</h6>
							<form
								action='/action_page.php'
								method='get'
								className='d-flex align-items-stretch'
							>
								<input
									type='email'
									className='form-control custom-input p-3'
									id='email'
									placeholder='Email address'
									name='email'
								/>
								<button
									type='submit'
									className='newsletter-btn d-inline-flex align-items-center px-4 p-3'
									title='Subscribe with newsletter'
								>
									<FontAwesomeIcon icon={faChevronRight} />
								</button>
							</form>
						</div>
						<div className='col-12 col-lg-12 col-xl-7'>
							<div className='row justify-content-between'>
								<div className='col-12 col-sm-6 col-md-5 col-lg-12 col-xl-5'>
									<div className='row my-0 mt-lg-5 mb-lg-3 my-xl-0 justify-content-evenly justify-content-sm-around justify-content-lg-end'>
										<div className='col-4 col-sm-6 col-md-7 col-lg-5 p-0'>
											<ul className='list-unstyled m-0 p-0 text-start text-sm-start'>
												<li className='mb-3 mb-lg-0 mb-xl-3 d-block d-lg-inline-block d-xl-block'>
													<a
														href='#home'
														target='_blank'
														title='Home'
														rel='noopener noreferrer'
														className='footer-link d-inline-block p-3'
													>
														Home
													</a>
												</li>
												<li className='mb-3 mb-lg-0 mb-xl-3 d-block d-lg-inline-block d-xl-block'>
													<a
														href='#home'
														target='_blank'
														title='About Us'
														rel='noopener noreferrer'
														className='footer-link d-inline-block p-3'
													>
														About Us
													</a>
												</li>
												<li className='mb-3 mb-lg-0 mb-xl-3 d-block d-lg-inline-block d-xl-block'>
													<a
														href='#home'
														target='_blank'
														title='Services'
														rel='noopener noreferrer'
														className='footer-link d-inline-block p-3'
													>
														Services
													</a>
												</li>
												<li className='mb-3 mb-lg-0 mb-xl-3 d-block d-lg-inline-block d-xl-block'>
													<a
														href='#home'
														target='_blank'
														title='Latest News'
														rel='noopener noreferrer'
														className='footer-link d-inline-block p-3'
													>
														Latest News
													</a>
												</li>
											</ul>
										</div>
										<div className='col-4 col-sm-6 col-md-5 col-lg-5 p-0'>
											<ul className='list-unstyled m-0 p-0 text-start text-sm-start'>
												<li className='mb-3 mb-lg-0 mb-xl-3 d-block d-md-inline-block d-xl-block'>
													<a
														href='#home'
														target='_blank'
														title='Help'
														rel='noopener noreferrer'
														className='footer-link d-inline-block p-3'
													>
														Help
													</a>
												</li>
												<li className='mb-3 mb-lg-0 mb-xl-3 d-block d-md-inline-block d-xl-block'>
													<a
														href='#home'
														target='_blank'
														title='FAQs'
														rel='noopener noreferrer'
														className='footer-link d-inline-block p-3'
													>
														FAQs
													</a>
												</li>
												<li className='mb-3 mb-lg-0 mb-xl-3 d-block d-md-inline-block d-xl-block'>
													<a
														href='#home'
														target='_blank'
														title='Contact Us'
														rel='noopener noreferrer'
														className='footer-link d-inline-block p-3'
													>
														Contact Us
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className='col-12 col-sm-6 col-md-5 col-lg-12 col-xl-6'>
									<address className='contact m-0'>
										<ul className='list-unstyled m-0 p-0 d-flex flex-wrap flex-column flex-lg-row flex-xl-column justify-content-center justify-content-lg-evenly'>
											<li className='mb-3 mb-lg-0 mb-xl-3 d-flex align-items-center'>
												<FontAwesomeIcon
													icon={faLocationDot}
													size='lg'
													className='text-white p-2 contact-icon'
												/>
												<a
													href='tel:+(321) 984 754'
													target='_blank'
													title='Call +(321) 984 754'
													rel='noopener noreferrer'
													className='footer-link d-inline-block p-3 contact-info'
												>
													28 Division St, New York, <br />
													NY 10002, USA
												</a>
											</li>
											<li className='mb-3 mb-lg-0 mb-xl-3 d-flex align-items-center'>
												<FontAwesomeIcon
													icon={faEnvelope}
													size='lg'
													className='text-white p-2 contact-icon'
												/>
												<a
													href='tel:+(321) 984 754'
													target='_blank'
													title='Call +(321) 984 754'
													rel='noopener noreferrer'
													className='footer-link d-inline-block p-3 contact-info'
												>
													Email: Startnext@Gmail.Com
												</a>
											</li>
											<li className='mb-3 mb-lg-0 mb-xl-3 d-flex align-items-center'>
												<FontAwesomeIcon
													icon={faPhone}
													size='lg'
													className='text-white p-2 contact-icon'
												/>
												<a
													href='tel:+(321) 984 754'
													target='_blank'
													title='Call +(321) 984 754'
													rel='noopener noreferrer'
													className='footer-link d-inline-block p-3 contact-info'
												>
													Phone: + (321) 984 754
												</a>
											</li>
										</ul>
									</address>
								</div>
							</div>
						</div>
					</div>
					<div className='row g-3 d-flex flex-column flex-lg-row mb-3'>
						<div className='col border-top pt-3 d-flex order-2 order-sm-2 order-lg-1 justify-content-center justify-content-sm-center justify-content-lg-start align-items-center'>
							<a
								href='#home'
								target='_blank'
								title='Terms & Conditions'
								rel='noopener noreferrer'
								className='footer-link'
							>
								<p className='footer-parag m-0 p-3 text-center'>
									Terms & Conditions
								</p>
							</a>
							<a
								href='#home'
								target='_blank'
								title='Privacy Policy'
								rel='noopener noreferrer'
								className='footer-link'
							>
								<p className='footer-parag m-0 p-3 text-center'>
									Privacy Policy
								</p>
							</a>
						</div>
						<div className='col border-top pt-3 d-flex order-3 order-sm-3 order-lg-2 justify-content-center align-items-center'>
							<p className='footer-parag m-0 p-3 d-inline-block'>
								&copy; All Rights Reserved. Techreif
							</p>
						</div>
						<div className='col border-top pt-3 d-flex order-1 order-sm-1 order-lg-3 justify-content-center justify-content-sm-center justify-content-lg-end align-items-center'>
							<a
								href='#home'
								title='Go To Techreif Facebook'
								className='footer-link footer-icon mx-3 mx-lg-2 my-2 p-3'
							>
								<FontAwesomeIcon icon={faFacebookF} />
							</a>
							<a
								href='#home'
								title='Go To Techreif Twitter'
								className='footer-link footer-icon mx-3 mx-lg-2 my-2 p-3'
							>
								<FontAwesomeIcon icon={faTwitter} />
							</a>
							<a
								href='#home'
								title='Go To Techreif Instagram'
								className='footer-link footer-icon mx-3 mx-lg-2 my-2 p-3'
							>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
