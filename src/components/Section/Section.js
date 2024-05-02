import React from 'react';

import './Section.css';
import SectionHeader from './SectionHeader/SectionHeader';

function Section(props) {
	const {backImage, backDesc, promo, mobile} = props;

	return (
		<div className={`section ${promo && 'promo'} ${mobile && 'mobile'}`}>
			<img src={backImage} alt={backDesc} className='section--image' />
			<SectionHeader {...props} />
		</div>
	);
}

export default Section;
