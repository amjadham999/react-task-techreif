import "../../assets/css/card.css";

const Card = ({ data }) => {
	return (
		<>
			<div className="col">
				<div className="container-fluid p-0 card rounded-3">
					<img
						src={data.img}
						alt="Alternative Text"
						className="img-fluid w-100"
					/>
					<div className="container-fluid p-3">
						<h5 className="card-title mb-3">{data.title}</h5>
						<ul>
							{data.tags.map((tag, index) => (
								<li
									key={index}
									className="custom-list-item custom-color-grey mb-1"
								>
									{tag}
								</li>
							))}
						</ul>
						<p className="card-parag mb-4">{data.desc}</p>
						<p className="card-date mb-2">{data.date}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
