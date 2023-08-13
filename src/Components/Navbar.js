import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';
import Logo from '../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav';

const Navbar = () => {
	return (
		<>
			{/* <!-- Navbar --> */}
			<div className='container my-5'>
				<nav className='navbar navbar-expand-lg'>
					<div className='container-fluid d-flex justify-content-sm-between p-0'>
						{/* <!-- Brand --> */}
						<Link to='/home' className='navbar-brand'>
							<img src={Logo} alt='Logo' width='' height='' />
						</Link>
						{/* <!-- Toggler --> */}
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarNavAltMarkup'
							aria-controls='navbarNavAltMarkup'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<FontAwesomeIcon icon={faBars} size='xl' />
						</button>
						{/* <!-- Navs --> */}
						<Nav />
					</div>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
