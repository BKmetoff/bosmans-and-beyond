import React from 'react'
import Layout from './components/backbone/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { COPY } from './components/resources/Resources'

import Home from './components/Home'
import Mission from './components/Mission'
import About from './components/About'

import { MainWrapper, ContentWrapper } from './components/backbone/Wrapper'

function App() {
	return (
		<div className='App'>
			<Router>
				<Layout headerLinks={COPY.headerLinks}>
					<MainWrapper>
						<ContentWrapper>
							<Switch>
								<Route path='/mission'>
									<Mission
										mission={COPY.text.mission}
										patron={COPY.text.patron}
									/>
								</Route>

								<Route path='/about' render={(props) => <About />} />
								<Route path='/' exact render={(props) => <Home />} />
							</Switch>
						</ContentWrapper>
					</MainWrapper>
				</Layout>
			</Router>
		</div>
	)
}

export default App
