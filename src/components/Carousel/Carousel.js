import React from 'react';

import CarouselItem from './CarouselItem/CarouselItem';

import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import {useWindowSize} from '../../hooks/useWindowSize';
import {useCalculateCarouselImage} from '../../hooks/useCalculateCarouselImage';

function Carousel(props) {
	const {items, activeSlide, settings} = props;

	const {width} = useWindowSize();

	const {handleResponsive} = useCalculateCarouselImage();

	// IF NOT CURRENT SLIDE ADD A CLASS THAT ADDS OPACITY

	return (
		<div className='carousel'>
			<Slider {...settings}>
				{items.map((item, index) => {
					return (
						<CarouselItem
							key={index + 1}
							responsive={handleResponsive}
							item={item}
							width={width}
						/>
					);
				})}
			</Slider>
		</div>
	);
}

export default Carousel;
