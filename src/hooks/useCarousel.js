import {useReducer} from 'react';

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

export const useCarousel = (type) => {
	const [carouselState, dispatch] = useReducer(carouselReducer, initialState);

	switch (type) {
		case 'center':
			const centerSettings = {
				dots: true,
				adaptiveHeight: true,
				arrows: true,
				centerMode: true,
				slidesToShow: 1,
				speed: 1500,
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

			return {activeSlide: carouselState.activeSlide, settings: centerSettings};

		case 'autoPlay':
			const autoPlaySettings = {
				dots: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				speed: 2000,
				autoplaySpeed: 2000,
				cssEase: 'linear',
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

			return {
				activeSlide: carouselState.activeSlide,
				settings: autoPlaySettings,
			};

		case 'focus':
			return {
				focusOnSelect: true,
				slidesToShow: 2,
				slidesToScroll: 1,
				speed: 1500,
			};

		default:
			return {};
	}
};

// export const useCarousel = (type) => {
// 	switch (type) {
// 		case 'center':
// 			return {
// 				// className: 'center',
// 				// centerPadding: '245px',
// 				dots: true,
// 				adaptiveHeight: true,
// 				arrows: true,
// 				centerMode: true,
// 				slidesToShow: 1,
// 				speed: 1500,
// 			};

// 		case 'focus':
// 			return {
// 				focusOnSelect: true,
// 				infinite: true,
// 				slidesToShow: 2,
// 				slidesToScroll: 1,
// 				speed: 1500,
// 			};

// 		default:
// 			return {};
// 	}
// };
