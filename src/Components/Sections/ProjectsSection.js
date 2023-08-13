import projectImg01 from "../../assets/images/home_projects_img_01.svg";
import projectImg02 from "../../assets/images/home_projects_img_02.svg";
import projectImg03 from "../../assets/images/home_projects_img_03.svg";
import projectImg04 from "../../assets/images/home_projects_img_04.svg";

const ProjectSection = () => {
	return (
		<>
			<div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 justify-content-center">
				<section className="col">
					<img src={projectImg01} className="img-fluid w-100" alt="Projects" />
					<div className="container-fluid px-3">
						<h5 className="custom-title-5 mb-3">Project Name</h5>
						<ul className="custom-list-style-position-in">
							<li className="custom-list-item custom-color-grey mb-1">UIUX</li>
						</ul>
					</div>
				</section>
				<section className="col">
					<img src={projectImg02} className="img-fluid w-100" alt="Projects" />
					<div className="container-fluid px-3">
						<h5 className="custom-title-5 mb-3">Project Name</h5>
						<ul className="custom-list-style-position-in">
							<li className="custom-list-item custom-color-grey mb-1">
								Digital Marketing
							</li>
						</ul>
					</div>
				</section>
				<section className="col">
					<img src={projectImg03} className="img-fluid w-100" alt="Projects" />
					<div className="container-fluid px-3">
						<h5 className="custom-title-5 mb-3">Project Name</h5>
						<ul className="custom-list-style-position-in">
							<li className="custom-list-item custom-color-grey mb-1">
								Digital Marketing
							</li>
						</ul>
					</div>
				</section>
				<section className="col">
					<img src={projectImg04} className="img-fluid w-100" alt="Projects" />
					<div className="container-fluid px-3">
						<h5 className="custom-title-5 mb-3">Project Name</h5>
						<ul className="custom-list-style-position-in">
							<li className="custom-list-item custom-color-grey mb-1">
								Digital Marketing
							</li>
						</ul>
					</div>
				</section>
			</div>
		</>
	);
};

export default ProjectSection;
