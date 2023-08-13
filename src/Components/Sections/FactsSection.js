import factImg01 from '../../assets/images/home_facts_img_01.svg';
import factImg02 from '../../assets/images/home_facts_img_02.svg';
import factImg03 from '../../assets/images/home_facts_img_03.svg';

const FactsSection = () => {
	return (
		<>
			<div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 justify-content-center'>
				<section className='col text-center'>
					<div className='fact-icon mb-4 p-3'>
						<img
							src={factImg01}
							className='img-fluid'
							alt='Company Fact Icons'
						/>
					</div>
					<div className='container-fluid px-3 text-center'>
						<h2 className='custom-title-3 p-1 m-0'>1000 &#43;</h2>
						<p className='custom-parag p-1'>Completed Projects</p>
					</div>
				</section>
				<section className='col text-center'>
					<div className='fact-icon mb-4 p-3'>
						<img
							src={factImg02}
							className='img-fluid'
							alt='Company Fact Icons'
						/>
					</div>
					<div className='container-fluid px-3 text-center'>
						<h2 className='custom-title-3 p-1 m-0'>50K &#43;</h2>
						<p className='custom-parag p-1'>Happy Customers</p>
					</div>
				</section>
				<section className='col text-center'>
					<div className='fact-icon mb-4 p-3'>
						<img
							src={factImg03}
							className='img-fluid'
							alt='Company Fact Icons'
						/>
					</div>
					<div className='container-fluid px-3 text-center'>
						<h2 className='custom-title-3 p-1 m-0'>20 &#43;</h2>
						<p className='custom-parag p-1'>Awards Won</p>
					</div>
				</section>
			</div>
		</>
	);
};

export default FactsSection;
