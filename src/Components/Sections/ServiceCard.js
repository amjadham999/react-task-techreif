const ServiceCard = ({ data }) => {
	return (
		<>
			<section className={`col ${data.classes.level0 ?? ""}`}>
				<div
					className={`container-fluid p-3 service-card rounded-3 ${
						data.classes.level1 ?? ""
					}`}
				>
					<div className="container-fluid d-flex justify-content-center align-items-center w-100 py-3 mb-4">
						<img src={data.img} className="img-fluid" alt="Services" />
					</div>
					<div className="container-fluid p-0 pb-3">
						<h5 className="custom-title-5 mb-3">{data.title}</h5>
						<p className="service-parag">{data.desc}</p>
						<ul className="custom-list-style-position-in">
							{data.fields.map((field, index) => (
								<li
									key={index}
									className="custom-list-item custom-color-grey mb-1"
								>
									{field}
								</li>
							))}
						</ul>
						<div className="pt-2">
							<a href="#servicePage" className="custom-link">
								Learn More <i className="fa-solid fa-angle-right"></i>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ServiceCard;
