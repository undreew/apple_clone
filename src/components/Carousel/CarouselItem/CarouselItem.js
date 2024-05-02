import React from 'react';

import './CarouselItem.css';

function CarouselItem(props) {
	const {responsive, item, width} = props;

	return (
		<div className='carousel--item'>
			<img
				src={responsive(item, width)}
				alt={item.alt}
				className='carousel--item__image'
			/>
		</div>
	);
}

export default CarouselItem;
