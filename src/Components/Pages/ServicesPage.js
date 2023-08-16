import Intro from "../Intro";
import data from "../../Data/ServicesData";
import ServiceCard from "../Sections/ServiceCard";
import "../../assets/css/serviceCard.css";

const ServicesPage = () => {
	return (
		<>
			{/* <!-- Services Header --> */}
			<div className="container-fluid" id="servicePage">
				<Intro data={data.intro} />
			</div>
			{/* <!-- Services Cards --> */}
			<div className="container-fluid my-5 py-5 rounded-3 services">
				<div className="container">
					<div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 justify-content-center">
						<ServiceCard data={data.grid.cards[0]} />
						<ServiceCard data={data.grid.cards[1]} />
						<ServiceCard data={data.grid.cards[2]} />
						<ServiceCard data={data.grid.cards[3]} />
					</div>
				</div>
			</div>
			<br />
		</>
	);
};

export default ServicesPage;
