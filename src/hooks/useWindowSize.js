import {useState, useEffect} from 'react';

function getWindowSize() {
	const {innerWidth: width, innerHeight: height} = window;
	return {width, height};
}

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState(getWindowSize());

	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return {
		width: windowSize.width,
		height: windowSize.height,
	};
};
