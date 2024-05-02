import {Fragment} from 'react';
import {Link} from 'react-router-dom';

import './NavItems.css';

function NavItems() {
	return (
		<Fragment>
			<Link to='/' className='navbar--item apple'>
				<i className='fa fa-apple fa-xl'></i>
			</Link>
			<Link to='/store' className='navbar--item'>
				Store
			</Link>
			<Link to='/mac' className='navbar--item'>
				Mac
			</Link>
			<Link to='/ipad' className='navbar--item'>
				iPad
			</Link>
			<Link to='/iphone' className='navbar--item'>
				iPhone
			</Link>
			<Link to='/watch' className='navbar--item'>
				Watch
			</Link>
			<Link to='/airpods' className='navbar--item'>
				AirPods
			</Link>
			<Link to='/tv-&home' className='navbar--item'>
				TV & Home
			</Link>
			<Link to='/only-on-apple' className='navbar--item'>
				Only on Apple
			</Link>
			<Link to='/accessories' className='navbar--item'>
				Accessories
			</Link>
			<Link to='/support' className='navbar--item'>
				Support
			</Link>
			<Link to='/search' className='navbar--item search'>
				<i className='fa fa-search fa-md'></i>
			</Link>
			<Link to='/shop' className='navbar--item shop'>
				<i className='fa-solid fa-bag-shopping fa-lg'></i>
			</Link>
		</Fragment>
	);
}

export default NavItems;
