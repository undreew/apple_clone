import React from 'react';
import {Link} from 'react-router-dom';

import './Support.css';

function Support() {
	return (
		<div className='support-container'>
			<p className='support-container--text'>
				<Link to='/store'>Shop online</Link> for fast, free delivery. Call us as
				1800-1651-0525 or visit <Link to='/support'>support</Link>.
			</p>
		</div>
	);
}

export default Support;
