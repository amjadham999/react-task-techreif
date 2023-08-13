import ActiveBlogImg from "../../assets/images/active_blog_img.svg";

const ActiveBlog = () => {
	return (
		<>
			{/* <!-- Active Blog --> */}
			<img src={ActiveBlogImg} alt="News" className="img-fluid w-100" />
			<div className="container-fluid p-3 pt-4">
				<div className="d-flex flex-column-reverse flex-sm-row justify-content-center justify-content-sm-between align-items-center">
					<button className="custom-btn-filled rounded-3 px-4 py-3">
						Digital Marketing
					</button>
					<p className="blog-parag m-0 p-3">Techreif Oct 20, 2022</p>
				</div>
				<h5 className="blog-title my-5">Lorem Ipsum Dolor Sit Amet</h5>
				<p className="blog-parag">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugit
					fugiat necessitatibus repellat cumque ullam maiores, dolore alias
					omnis, tempore error nobis consequatur distinctio asperiores laborum
					culpa in? Eum, fugit? <br />
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi
					deleniti, temporibus perferendis pariatur, nemo vero accusamus
					officiis ut alias quae hic. Tempore impedit quod voluptas quisquam
					iste. Sed, voluptas. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Architecto earum doloribus, commodi recusandae nobis
					cupiditate laboriosam. Voluptatem, vitae beatae, possimus quas est
					culpa minus, doloremque provident laboriosam perferendis harum nisi.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
					<br />
					Facere sequi deleniti, temporibus perferendis pariatur, nemo vero
					accusamus officiis ut alias quae hic. Tempore impedit quod voluptas
					quisquam iste. Sed, voluptas. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Architecto earum doloribus, commodi recusandae nobis
					cupiditate laboriosam. Voluptatem, vitae beatae, possimus quas est
					culpa minus, doloremque provident laboriosam perferendis harum nisi.
				</p>
			</div>
		</>
	);
};

export default ActiveBlog;
