import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<>
			{/* <!-- Navs --> */}
			<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
				<div className='navbar-nav ms-auto'>
					<Link
						to={'/home'}
						className='nav-link text-center py-3 p-lg-3 active'
						aria-current='page'
					>
						Home
					</Link>
					<Link to={'/services'} className='nav-link text-center py-3 p-lg-3'>
						Our Services
					</Link>
					<Link to={'/news'} className='nav-link text-center py-3 p-lg-3'>
						Latest News
					</Link>
					<Link to={'/about'} className='nav-link text-center py-3 p-lg-3'>
						About Us
					</Link>
					<Link to={'/contact'} className='nav-link text-center py-3 p-lg-3'>
						Contact Us
					</Link>
					<Link to={'/blogs'} className='nav-link text-center py-3 p-lg-3'>
						Blogs
					</Link>
					<Link
						className='nav-link text-center custom-btn custom-btn-outline d-flex justify-content-center align-items-center'
					>
						Support
					</Link>
				</div>
			</div>
		</>
	);
};

export default Nav;
