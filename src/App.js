import React from 'react'
import Layout from './components/backbone/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { COPY } from './components/resources/Resources'

function App() {
	return (
		<div className='App'>
			<Layout headerLinks={COPY.headerLinks}>
				<div>some stuff here</div>
			</Layout>
		</div>
	)
}

export default App
