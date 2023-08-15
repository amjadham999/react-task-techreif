import "../../assets/css/curtain.css";
import Intro from "../Intro";
import data from "../../Data/NewsData";
import Card from "../Sections/Card";

const NewsPage = () => {
	return (
		<>
			{/* <!-- News Header --> */}
			<div className="container-fluid">
				<Intro data={data.intro} />
			</div>
			{/* <!-- News Grid --> */}
			<div className="container my-5">
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
					{data.grid.cards.map((card, index) => (
						<Card key={index} data={card} />
					))}
				</div>
			</div>
			<br />
		</>
	);
};

export default NewsPage;
