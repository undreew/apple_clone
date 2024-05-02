import React, {useEffect, useState} from 'react';

import './Navbar.css';
import Sidedrawer from './Sidedrawer';

function Navbar(props) {
	const {navItems} = props;

	const [isToggled, setIsToggled] = useState(false);

	const handleSideDrawerToggle = () => {
		setIsToggled((prevValue) => !prevValue);
	};

	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
			<div className='navbar--container'>
				{/* SIDEDRAWER */}
				<Sidedrawer onShow={isToggled} onToggle={handleSideDrawerToggle}>
					{navItems}
				</Sidedrawer>
				{/* HAMBURGER */}
				<div className='navbar--hamburger' onClick={handleSideDrawerToggle}>
					<span></span>
					<span></span>
				</div>
				{/* NAV ITEMS */}
				{navItems}
			</div>
		</nav>
	);
}

export default Navbar;
