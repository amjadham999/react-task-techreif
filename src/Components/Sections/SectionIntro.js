const SectionIntro = (props) => {
	return (
		<>
			<section className='container-fluid text-center p-0 mb-5'>
				<h2 className='pb-2 custom-title-2'>{props.data.title}</h2>
				<p className='custom-parag'>{props.data.parag}</p>
			</section>
		</>
	);
};

export default SectionIntro;
