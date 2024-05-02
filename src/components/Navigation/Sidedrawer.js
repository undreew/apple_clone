import React from 'react';
import ReactDOM from 'react-dom';
import {useLocation, Link} from 'react-router-dom';

import './Sidedrawer.css';

function Sidedrawer(props) {
	const {children} = props;

	const location = useLocation();

	const handleClick = (e) => {
		if (location.pathname === '/') {
			props.onToggle();
		}
	};

	const content = (
		<div className={`side-drawer ${props.onShow ? 'show' : ''}`}>
			{/* HEADER */}
			<div className='side-drawer__header'>
				<i
					className='fa-regular fa-x side-drawer__header--button'
					onClick={props.onToggle}
				></i>
				<Link to='/' onClick={handleClick}>
					<i className='fa fa-apple fa-lg side-drawer__header--brand'></i>
				</Link>
			</div>
			{/* SEARCH BAR */}
			<div className='side-drawer__search'>
				<input
					type='text'
					placeholder='Search apple.com'
					className='side-drawer__search--input'
				/>
			</div>
			{/* NAV ITEMS */}
			<div className='side-drawer__nav-items'>{children}</div>
		</div>
	);

	return ReactDOM.createPortal(
		content,
		document.getElementById('side__drawer')
	);
}

export default Sidedrawer;
