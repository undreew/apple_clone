import React, {useReducer} from 'react';
import Slider from 'react-slick';

import './TestingCarousel.css';

const initialState = {
	oldSlide: 0,
	activeSlide: 0,
	activeSlide2: 0,
};

const carouselReducer = (state, action) => {
	switch (action.type) {
		case 'BEFORE_CHANGE':
			return {
				...state,
				oldSlide: action.current,
				activeSlide: action.next,
			};

		case 'AFTER_CHANGE':
			return {
				...state,
				activeSlide2: action.current,
			};

		case 'RESET':
			return {
				oldSlide: 0,
				activeSlide: 0,
				activeSlide2: 0,
			};

		default:
			return state;
	}
};

function TestingCarousel() {
	const [carouselState, dispatch] = useReducer(carouselReducer, initialState);

	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		beforeChange: (current, next) => {
			dispatch({
				type: 'BEFORE_CHANGE',
				current,
				next,
			});
		},
		afterChange: (current) => {
			dispatch({
				type: 'AFTER_CHANGE',
				current,
			});
		},
	};

	return (
		<div>
			<h2>beforeChange and afterChange hooks</h2>
			<p>
				BeforeChange oldSlide: <strong>{carouselState.oldSlide}</strong>
			</p>
			<p>
				BeforeChange activeSlide: <strong>{carouselState.activeSlide}</strong>
			</p>
			<p>
				AfterChange activeSlide: <strong>{carouselState.activeSlide2}</strong>
			</p>
			<Slider {...settings}>
				<div>
					<h3>1</h3>
				</div>
				<div>
					<h3>2</h3>
				</div>
				<div>
					<h3>3</h3>
				</div>
				<div>
					<h3>4</h3>
				</div>
				<div>
					<h3>5</h3>
				</div>
				<div>
					<h3>6</h3>
				</div>
				<div>
					<h3>7</h3>
				</div>
			</Slider>
		</div>
	);
}

export default TestingCarousel;
