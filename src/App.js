import React from 'react'
import Layout from './components/backbone/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { COPY } from './components/resources/Resources'

import Home from './components/Home'
import Listen from './components/Listen'
import Agenda from './components/Agenda'
import Gallery from './components/Gallery'

import MainWrapper from './components/backbone/Wrapper'

function App() {
	return (
		<div className='App'>
			<MainWrapper>
				<Router>
					<Layout headerLinks={COPY.headerLinks}>
						<Switch>
							<Route path='/listen' render={(props) => <Listen />} />
							<Route path='/agenda' render={(props) => <Agenda />} />
							<Route path='/gallery' render={(props) => <Gallery />} />
							<Route path='/' exact render={(props) => <Home />} />
						</Switch>
					</Layout>
				</Router>
			</MainWrapper>
		</div>
	)
}

export default App
