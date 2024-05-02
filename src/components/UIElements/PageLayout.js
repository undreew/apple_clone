import React from 'react';
import Navbar from '../Navigation/Navbar';
import NavItems from '../Navigation/NavItems';

function PageLayout(props) {
	const {children} = props;

	return (
		<div className='page'>
			<Navbar navItems={<NavItems />} />
			{children}
		</div>
	);
}

export default PageLayout;
