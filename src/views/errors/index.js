import React from 'react';
import PageLayout from '../../components/UIElements/PageLayout';

import './Error.css';

function Index() {
	return (
		<PageLayout>
			<div className='error'>
				<div className='error--container'>
					<h1>PAGE NOT FOUND</h1>
				</div>
			</div>
		</PageLayout>
	);
}

export default Index;
