import serviceImg01 from "../assets/images/services_img_01.svg";
import serviceImg02 from "../assets/images/services_img_02.svg";
import serviceImg03 from "../assets/images/services_img_03.svg";
import serviceImg04 from "../assets/images/services_img_04.svg";

let data = {
	intro: {
		title: "Our Services",
		parag:
			"The Service We Offer Is Specifically Designed \nTo Meet Your Needs.",
		classes: "intro-bg-img",
	},
	grid: {
		cards: [
			{
				img: serviceImg01,
				classes: {
					level0: "",
					level1: "",
				},
				title: "Digital Marketing",
				fields: [
					"Google Ads",
					"Facebook Ads",
					"Instagram Ads",
					"Search Engine Optimization",
				],
				desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Ut Enim Ad Minim Veniam",
			},
			{
				img: serviceImg02,
				classes: {
					level0: "mt-4 mt-xl-5 d-flex",
					level1: "mt-0 mt-xl-5",
				},
				title: "Website Development & Design",
				fields: ["Wordpress Development", "Ecommerce", "UI Design"],
				desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Ut Enim Ad Minim Veniam",
			},
			{
				img: serviceImg03,
				classes: {
					level0: "mt-4 mt-xl-5 d-flex",
					level1: "mt-0 mt-xl-5",
				},
				title: "Software",
				fields: [
					"Setting up CRM",
					"Software recommendation for a specific business type",
				],
				desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Ut Enim Ad Minim Veniam",
			},
			{
				img: serviceImg04,
				title: "Graphic Design & Branding",
				classes: {
					level0: "",
					level1: "",
				},
				fields: [
					"Brand Guidelines",
					"Brand Identity",
					"Color Pallete",
					"Social Media Designs",
				],
				desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Ut Enim Ad Minim Veniam",
			},
		],
	},
};

export default data;
