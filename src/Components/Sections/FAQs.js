import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const FAQs = () => {
	return (
		<>
			<div className='container p-5 pb-4 rounded-3 freq-body'>
				<div className='row'>
					<div className='col-12 col-md-12 col-lg-6'>
						<div className='collapse-card bg-white mb-4 px-4 py-4 rounded-3'>
							<div className='d-flex align-items-center justify-content-between'>
								<h5 className='m-0 freq-title'>
									Amet minim mollit non deserunt ullamco
								</h5>
								<button
									className='freq-btn'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseExample1'
									aria-expanded='false'
									aria-controls='collapseExample1'
									title='Press to toggle display status'
								>
									<FontAwesomeIcon icon={faPlus} />
								</button>
							</div>
							<div className='collapse show' id='collapseExample1'>
								<div className='border-0 p-0 mt-4'>
									<p className='freq-parag'>
										Some placeholder content for the collapse component. This
										panel is hidden by default but revealed when the user
										activates the relevant trigger.
									</p>
								</div>
							</div>
						</div>
						<div className='collapse-card bg-white mb-4 px-4 py-4 rounded-3'>
							<div className='d-flex align-items-center justify-content-between'>
								<h5 className='m-0 freq-title'>
									Amet minim mollit non deserunt ullamco
								</h5>
								<button
									className='freq-btn'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseExample2'
									aria-expanded='false'
									aria-controls='collapseExample2'
									title='Press to toggle display status'
								>
									<FontAwesomeIcon icon={faPlus} />
								</button>
							</div>
							<div className='collapse' id='collapseExample2'>
								<div className='border-0 p-0 mt-4'>
									<p className='freq-parag'>
										Some placeholder content for the collapse component. This
										panel is hidden by default but revealed when the user
										activates the relevant trigger.
									</p>
								</div>
							</div>
						</div>
						<div className='collapse-card bg-white mb-4 px-4 py-4 rounded-3'>
							<div className='d-flex align-items-center justify-content-between'>
								<h5 className='m-0 freq-title'>
									Amet minim mollit non deserunt ullamco
								</h5>
								<button
									className='freq-btn'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseExample3'
									aria-expanded='false'
									aria-controls='collapseExample3'
									title='Press to toggle display status'
								>
									<FontAwesomeIcon icon={faPlus} />
								</button>
							</div>
							<div className='collapse' id='collapseExample3'>
								<div className='border-0 p-0 mt-4'>
									<p className='freq-parag'>
										Some placeholder content for the collapse component. This
										panel is hidden by default but revealed when the user
										activates the relevant trigger.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='col-12 col-md-12 col-lg-6'>
						<div className='collapse-card bg-white mb-4 px-4 py-4 rounded-3'>
							<div className='d-flex align-items-center justify-content-between'>
								<h5 className='m-0 freq-title'>
									Amet minim mollit non deserunt ullamco
								</h5>
								<button
									className='freq-btn'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseExample4'
									aria-expanded='false'
									aria-controls='collapseExample4'
									title='Press to toggle display status'
								>
									<FontAwesomeIcon icon={faPlus} />
								</button>
							</div>
							<div className='collapse' id='collapseExample4'>
								<div className='border-0 p-0 mt-4'>
									<p className='freq-parag'>
										Some placeholder content for the collapse component. This
										panel is hidden by default but revealed when the user
										activates the relevant trigger.
									</p>
								</div>
							</div>
						</div>
						<div className='collapse-card bg-white mb-4 px-4 py-4 rounded-3'>
							<div className='d-flex align-items-center justify-content-between'>
								<h5 className='m-0 freq-title'>
									Amet minim mollit non deserunt ullamco
								</h5>
								<button
									className='freq-btn'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseExample5'
									aria-expanded='false'
									aria-controls='collapseExample5'
									title='Press to toggle display status'
								>
									<FontAwesomeIcon icon={faPlus} />
								</button>
							</div>
							<div className='collapse' id='collapseExample5'>
								<div className='border-0 p-0 mt-4'>
									<p className='freq-parag'>
										Some placeholder content for the collapse component. This
										panel is hidden by default but revealed when the user
										activates the relevant trigger.
									</p>
								</div>
							</div>
						</div>
						<div className='collapse-card bg-white mb-4 px-4 py-4 rounded-3'>
							<div className='d-flex align-items-center justify-content-between'>
								<h5 className='m-0 freq-title'>
									Amet minim mollit non deserunt ullamco
								</h5>
								<button
									className='freq-btn'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseExample6'
									aria-expanded='false'
									aria-controls='collapseExample6'
									title='Press to toggle display status'
								>
									<FontAwesomeIcon icon={faPlus} />
								</button>
							</div>
							<div className='collapse' id='collapseExample6'>
								<div className='border-0 p-0 mt-4'>
									<p className='freq-parag'>
										Some placeholder content for the collapse component. This
										panel is hidden by default but revealed when the user
										activates the relevant trigger.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FAQs;
