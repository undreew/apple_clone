import React, {useState, useEffect} from 'react';

function getWindowSize() {
	const {innerWidth: width, innerHeight: height} = window;
	return {width, height};
}

function WindowSize() {
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

	return (
		<div>
			<h2>Width: {windowSize.width}</h2>
			{/* <h2>Height: {windowSize.height}</h2> */}
		</div>
	);
}

export default WindowSize;
