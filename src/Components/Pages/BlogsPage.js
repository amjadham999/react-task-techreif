import "../../assets/css/blogs.css";
import Intro from "../Intro";
import ActiveBlog from "../Sections/ActiveBlog";
import BlogCard from "../Sections/BlogCard";
import data from "../../Data/BlogData";

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
				<section className="container-fluid text-center p-0 pt-5 mb-5">
					<h2 className="custom-title-2">Popular Blogs</h2>
				</section>
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
					{data.cards.map((card, index) => (
						<BlogCard key={index} data={card} />
					))}
				</div>
			</div>
			<br />
		</>
	);
};

export default BlogPage;
