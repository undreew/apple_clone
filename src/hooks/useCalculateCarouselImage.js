export const useCalculateCarouselImage = () => {
	let image;

	const handleResponsive = (item, width) => {
		if (width >= 1440) {
			image = item.large;
		} else if (width >= 1069) {
			image = item.medium;
		} else if (width >= 735) {
			image = item.small;
		} else if (width < 735) {
			image = item.mobile;
		}

		return image;
	};

	return {handleResponsive};
};
