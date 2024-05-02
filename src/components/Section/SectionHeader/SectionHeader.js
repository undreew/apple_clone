import React from 'react';
import {Link} from 'react-router-dom';

import './SectionHeader.css';

function SectionHeader(props) {
	const {
		headerPosition,
		headerFontSize,
		light,
		dark,
		mainHeader,
		mainHeaderLogo,
		mainHeaderLogoDesc,
		subHeader,
		subHeaderLogo,
		subHeaderLogoDesc,
		mainParagraph,
		links,
	} = props;

	return (
		<div
			className={`section--header ${light && 'light'} ${dark && 'dark'} ${
				headerPosition === 'top' && 'top'
			} ${headerPosition === 'right' && 'right'} ${
				headerPosition === 'bottom' && 'bottom'
			} ${headerPosition === 'left' && 'left'} ${
				headerFontSize === 'large' && 'large'
			} ${headerFontSize === 'medium' && 'medium'} ${
				headerFontSize === 'small' && 'small'
			}`}
		>
			{mainHeader ? (
				<h1>{mainHeader}</h1>
			) : (
				<div className='section--header__main-header-image'>
					<img src={mainHeaderLogo} alt={mainHeaderLogoDesc} />
				</div>
			)}
			{subHeader && (
				<h2>
					{subHeader}
					{subHeaderLogo && <img src={subHeaderLogo} alt={subHeaderLogoDesc} />}
				</h2>
			)}
			{mainParagraph && <p>{mainParagraph}</p>}
			<div className='section--header__links'>
				{links &&
					links.map((item, index) => {
						return (
							<div
								className={`section--header__link ${
									headerFontSize === 'large' && 'large'
								} ${headerFontSize === 'medium' && 'medium'} ${
									headerFontSize === 'small' && 'small'
								}`}
								key={index + 1}
							>
								<Link to={`/${item.route}`}>{item.text}</Link>
								<span>{'>'}</span>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default SectionHeader;
