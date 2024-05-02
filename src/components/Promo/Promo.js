import React from 'react';

import './Promo.css';

function Promo(props) {
	const {children} = props;

	return <div className='promo-section'>{children}</div>;
}

export default Promo;
