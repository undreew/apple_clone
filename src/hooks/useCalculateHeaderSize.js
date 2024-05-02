const useCalculateHeaderSize = (width) => {
	let fontSize;

	if (width >= 1069) {
		fontSize = 'large';
	} else if (width >= 735) {
		fontSize = 'medium';
	} else if (width < 735) {
		fontSize = 'small';
	}

	return {fontSize};
};

export default useCalculateHeaderSize;
