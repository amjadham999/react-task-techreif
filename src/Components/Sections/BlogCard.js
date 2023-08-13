const BlogCard = (props) => {
	return (
		<>
			<div className="col">
				<div className="container-fluid p-0 blog-card rounded-3">
					<img src={props.data.img} alt="Blog" className="img-fluid w-100" />
					<div className="container-fluid p-3">
						<h5 className="blog-title mb-3">{props.data.title}</h5>
						<ul>
							{props.data.tags.map((tag, index) => (
								<li
									key={index}
									className="custom-list-item custom-color-grey mb-1"
								>
									{tag}
								</li>
							))}
						</ul>
						<p className="blog-parag mb-4">{props.data.desc}</p>
						<p className="blog-date mb-2">{props.data.date}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogCard;
