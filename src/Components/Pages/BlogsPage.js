import "../../assets/css/curtain.css";
import Intro from "../Intro";
import ActiveBlog from "../Sections/ActiveBlog";
import Card from "../Sections/Card";
import data from "../../Data/BlogsData";

const BlogPage = () => {
	return (
		<>
			{/* <!-- Blog Header --> */}
			<div className="container-fluid">
				<Intro data={data.intro} />
			</div>
			{/* <!-- Active Blog --> */}
			<div className="container my-5">
				<ActiveBlog />
			</div>
			{/* <!-- Blogs Grid --> */}
			<div className="container my-5">
				<Intro data={{title: data.grid.title}} />
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

export default BlogPage;
