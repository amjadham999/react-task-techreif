import BlogImg01 from "../assets/images/blog_img_01.svg";
import BlogImg02 from "../assets/images/blog_img_02.svg";
import BlogImg03 from "../assets/images/blog_img_03.svg";
import BlogImg04 from "../assets/images/blog_img_04.svg";

let data = {
	intro: {
		title: "Blog Title",
		parag: "Follow Us For The Popular And Most Viewed Blogs",
		classes:
			"blog-header d-flex flex-column justify-content-center align-content-center",
	},
	cards: [
		{
			img: BlogImg01,
			title: "Blog Title",
			tags: ["Digital Marketing"],
			desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing",
			date: "Techreif Oct 20, 2022",
		},
		{
			img: BlogImg02,
			title: "Blog Title",
			tags: ["Front-End"],
			desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing",
			date: "Techreif Oct 20, 2022",
		},
		{
			img: BlogImg03,
			title: "Blog Title",
			tags: ["Back-End"],
			desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing",
			date: "Techreif Oct 20, 2022",
		},
		{
			img: BlogImg04,
			title: "Blog Title",
			tags: ["DevOps"],
			desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing",
			date: "Techreif Oct 20, 2022",
		},
	],
};

export default data;