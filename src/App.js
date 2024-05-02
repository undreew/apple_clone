import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// VIEWS
import LandingIndex from './views/landing/index';
import ErrorIndex from './views/errors/index';

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<LandingIndex />} />
					<Route path='*' element={<ErrorIndex />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
