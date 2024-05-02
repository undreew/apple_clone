const useCalculateImage = (item, width) => {
	let image;

	if (width >= 1069) {
		image = item.large;
	} else if (width >= 735) {
		image = item.medium;
	} else if (width < 735) {
		image = item.small;
	}

	return {image};
};

export default useCalculateImage;
