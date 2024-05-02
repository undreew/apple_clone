import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import './Footer.css';

import {
	shopAndLearn,
	services,
	account,
	appleStore,
	forBusiness,
	forEducation,
	appleValues,
	aboutApple,
	copyrightLinks,
} from '../../util/footer/data';
import {useWindowSize} from '../../hooks/useWindowSize';

function Footer() {
	const {width} = useWindowSize();

	return (
		<Fragment>
			<div className='footer'>
				<div className='footer--content'>
					<div className='footer--content__cols'>
						<div className='first--col'>
							<div className='shop-and-learn'>
								<p className='col-header'>
									{width < 835 && (
										<span className='col-header__plus-sign'>+</span>
									)}
									Shop and Learn
								</p>
								{shopAndLearn.map((item) => {
									return (
										<Link to={item.link} className='footer--link'>
											{item.text}
										</Link>
									);
								})}
							</div>
						</div>
						<div className='second--col'>
							<div className='services'>
								<p className='col-header'>
									{width < 835 && (
										<span className='col-header__plus-sign'>+</span>
									)}
									Services
								</p>
								{services.map((item) => {
									return (
										<Link to={item.link} className='footer--link'>
											{item.text}
										</Link>
									);
								})}
							</div>
							<div className='account'>
								<p className='col-header'>
									{width < 835 && (
										<span className='col-header__plus-sign'>+</span>
									)}
									Account
								</p>
								{account.map((item) => {
									return (
										<Link to={item.link} className='footer--link'>
											{item.text}
										</Link>
									);
								})}
							</div>
						</div>
						<div className='third--col'>
							<div className='apple-store'>
								<p className='col-header'>
									{width < 835 && (
										<span className='col-header__plus-sign'>+</span>
									)}
									Apple Store
								</p>
								{appleStore.map((item) => {
									return (
										<Link to={item.link} className='footer--link'>
											{item.text}
										</Link>
									);
								})}
							</div>
						</div>
						<div className='fourth--col'>
							<div className='for-business'>
								<p className='col-header'>
									{width < 835 && (
										<span className='col-header__plus-sign'>+</span>
									)}
									For Business
								</p>
								{forBusiness.map((item) => {
									return (
										<Link to={item.link} className='footer--link'>
											{item.text}
										</Link>
									);
								})}
							</div>
							<div className='for-education'>
								<p className='col-header'>
									{width < 835 && (
										<span className='col-header__plus-sign'>+</span>
									)}
									For Education
								</p>
								{forEducation.map((item) => {
									return (
										<Link to={item.link} className='footer--link'>
											{item.text}
										</Link>
									);
								})}
							</div>
						</div>
						<div className='fifth--col'>
							<div className='apple-values'>
								<p className='col-header'>
									{width < 835 && (
										<span className='col-header__plus-sign'>+</span>
									)}
									Apple Values
								</p>
								{appleValues.map((item) => {
									return (
										<Link to={item.link} className='footer--link'>
											{item.text}
										</Link>
									);
								})}
							</div>
							<div className='about-apple'>
								<p className='col-header'>
									{width < 835 && (
										<span className='col-header__plus-sign'>+</span>
									)}
									About Apple
								</p>
								{aboutApple.map((item) => {
									return (
										<Link to={item.link} className='footer--link'>
											{item.text}
										</Link>
									);
								})}
							</div>
						</div>
					</div>

					<div className='retailer'>
						<p>
							More ways to shop:
							<Link to='/find-a-retailer' className='footer--link link--retail'>
								Find a retailer
							</Link>
							near you. Or call 1800-1651-0525 (Smart/PLDT), 1800-8474-7382
							(Globe).
						</p>
					</div>

					<div className='copyright'>
						<p>Copyright © 2022 Apple Inc. All rights reserved.</p>
						<div className='copyright--links'>
							{copyrightLinks.map((item) => {
								return (
									<Link to={item.link} className='footer--link'>
										{item.text}
									</Link>
								);
							})}
						</div>
						<p>Philippines</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Footer;
