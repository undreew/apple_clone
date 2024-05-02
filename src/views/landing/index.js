import React from 'react';
import Section from '../../components/Section/Section';
import Support from '../../components/Support/Support';
import PageLayout from '../../components/UIElements/PageLayout';
import Promo from '../../components/Promo/Promo';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';

// HEADER IMAGES
import {heroSectionImages} from '../../util/heroSection/images';

// PROMO IMAGES
import {promoSectionImages} from '../../util/promoSection/images';

// PROMO LOGOS
import {logoImages} from '../../util/logo/images';

// CAROUSEL IMAGES
import {carouselImages} from '../../util/carousel/images';

// CUSTOM HOOKS
import {useWindowSize} from '../../hooks/useWindowSize';
import useCalculateImage from '../../hooks/useCalculateImage';
import useCalculateHeaderSize from '../../hooks/useCalculateHeaderSize';
import {useCarousel} from '../../hooks/useCarousel';

function Index() {
	const {width} = useWindowSize();

	// HERO SECTIONS
	const {firstHeroSection, secondHeroSection, thirdHeroSection} =
		heroSectionImages;

	const {image: ipadImage} = useCalculateImage(firstHeroSection, width);
	const {image: iphone14Image} = useCalculateImage(secondHeroSection, width);
	const {image: iphone14ProImage} = useCalculateImage(thirdHeroSection, width);

	// PROMO SECTIONS
	const {
		firstPromoSection,
		secondPromoSection,
		thirdPromoSection,
		fourthPromoSection,
		fifthPromoSection,
		sixthPromoSection,
	} = promoSectionImages;

	const {image: watchUltra} = useCalculateImage(firstPromoSection, width);
	const {image: watchSeries8} = useCalculateImage(secondPromoSection, width);
	const {image: ipadPro} = useCalculateImage(thirdPromoSection, width);
	const {image: tv4k} = useCalculateImage(fourthPromoSection, width);
	const {image: airpodsPro} = useCalculateImage(fifthPromoSection, width);
	const {image: watchSe} = useCalculateImage(sixthPromoSection, width);

	// FONTS
	const {fontSize: headerFontSize} = useCalculateHeaderSize(width);

	// LOGOS
	const {firstLogo, secondLogo, thirdLogo, fourthLogo, fifthLogo} = logoImages;

	const {image: watchUltraLogo} = useCalculateImage(firstLogo, width);
	const {image: watchSeries8Logo} = useCalculateImage(secondLogo, width);
	const {image: m2Logo} = useCalculateImage(thirdLogo, width);
	const {image: tv4kLogo} = useCalculateImage(fourthLogo, width);
	const {image: watchSeLogo} = useCalculateImage(fifthLogo, width);

	// CAROUSEL SETTINGS
	const {activeSlide, settings} = useCarousel('center');

	return (
		<PageLayout>
			<Support />

			<Section
				backImage={ipadImage}
				backDesc='iPad'
				headerPosition={width < 735 ? 'top' : 'right'}
				headerFontSize={headerFontSize}
				dark
				mainHeader='iPad'
				subHeader='Lovable. Drawable. Magical.'
				mainParagraph='Check back later for availability'
				links={[
					{text: 'Learn More', route: 'learn-more'},
					{text: 'View Pricing', route: 'view-pricing'},
				]}
			/>
			<Section
				backImage={iphone14Image}
				backDesc='iPhone 14 Pro'
				headerPosition='top'
				headerFontSize={headerFontSize}
				top
				light
				mainHeader='iPhone 14 Pro'
				subHeader='Pro. Beyond.'
				links={[
					{text: 'Learn More', route: 'learn-more'},
					{text: 'Buy', route: 'buy'},
				]}
			/>
			<Section
				backImage={iphone14ProImage}
				backDesc='iPhone 14'
				headerPosition='top'
				headerFontSize={headerFontSize}
				top
				dark
				mainHeader='iPhone 14'
				subHeader='Big and bigger.'
				links={[
					{text: 'Learn More', route: 'learn-more'},
					{text: 'Buy', route: 'buy'},
				]}
			/>

			<Promo>
				<Section
					backImage={watchUltra}
					backDesc='Watch Ultra'
					headerPosition='top'
					headerFontSize={headerFontSize}
					top
					dark
					promo
					mobile={width < 735 ? 'mobile' : ''}
					mainHeaderLogo={watchUltraLogo}
					mainHeaderLogoDesc='Watch Ultra'
					subHeader='Adventure awaits.'
					links={[
						{text: 'Learn More', route: 'learn-more'},
						{text: 'Buy', route: 'buy'},
					]}
				/>

				<Section
					backImage={watchSeries8}
					backDesc='Watch Series 8'
					headerPosition='top'
					headerFontSize={headerFontSize}
					top
					light
					promo
					mobile={width < 735 ? 'mobile' : ''}
					mainHeaderLogo={watchSeries8Logo}
					mainHeaderLogoDesc='Watch Series 8'
					subHeader='A healthy leap ahead.'
					links={[
						{text: 'Learn More', route: 'learn-more'},
						{text: 'Buy', route: 'buy'},
					]}
				/>

				<Section
					backImage={ipadPro}
					backDesc='iPad Pro'
					headerPosition='top'
					headerFontSize={headerFontSize}
					top
					light
					promo
					mobile={width < 735 ? 'mobile' : ''}
					mainHeader='iPad Pro'
					subHeader='Supercharged by'
					subHeaderLogo={m2Logo}
					subHeaderLogoDesc='M2'
					mainParagraph='Check back later for availability'
					links={[
						{text: 'Learn More', route: 'learn-more'},
						{text: 'View Pricing', route: 'view-pricing'},
					]}
				/>

				<Section
					backImage={tv4k}
					backDesc='tv 4k'
					headerPosition='top'
					headerFontSize={headerFontSize}
					top
					dark
					promo
					mobile={width < 735 ? 'mobile' : ''}
					mainHeaderLogo={tv4kLogo}
					mainHeaderLogoDesc='TV 4K'
					subHeader='The Apple experience. Cinematic in every sense.'
					mainParagraph='Check back later for availability'
					links={[
						{text: 'Learn More', route: 'learn-more'},
						{text: 'View Pricing', route: 'view-pricing'},
					]}
				/>

				<Section
					backImage={airpodsPro}
					backDesc='Air Pods Pro'
					headerPosition='top'
					headerFontSize={headerFontSize}
					top
					light
					promo
					mobile={width < 735 ? 'mobile' : ''}
					mainHeader='AirPods Pro'
					subHeader='Rebuilt from the sound up.'
					links={[
						{text: 'Learn More', route: 'learn-more'},
						{text: 'Buy', route: 'buy'},
					]}
				/>

				<Section
					backImage={watchSe}
					backDesc='Watch SE'
					headerPosition='top'
					headerFontSize={headerFontSize}
					top
					dark
					promo
					mobile={width < 735 ? 'mobile' : ''}
					mainHeaderLogo={watchSeLogo}
					mainHeaderLogoDesc='Watch SE'
					subHeader='A great deal to love.'
					links={[
						{text: 'Learn More', route: 'learn-more'},
						{text: 'Buy', route: 'buy'},
					]}
				/>
			</Promo>

			<Carousel
				activeSlide={activeSlide}
				items={carouselImages}
				settings={settings}
			/>

			<Footer />
		</PageLayout>
	);
}

export default Index;
