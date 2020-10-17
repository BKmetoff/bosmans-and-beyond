import React from 'react'
import Layout from './components/backbone/Layout'
import { Switch, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

import { COPY } from './components/resources/Resources'

import Home from './components/Home'
import Mission from './components/Mission'
import About from './components/About'
import Video from './components/Video'
import NotFound from './components/NotFound'

import { MainWrapper, ContentWrapper } from './components/backbone/Wrapper'

function App() {
	const location = useLocation()
	return (
		<div className='App'>
			{console.log(location.pathname)}
			<Layout headerLinks={COPY.headerLinks}>
				<MainWrapper>
					<ContentWrapper>
						<AnimatePresence exitBeforeEnter>
							<Switch location={location} key={location.pathname}>
								<Route path='/mission'>
									<Mission
										mission={COPY.text.mission}
										patron={COPY.text.patron}
									/>
								</Route>
								<Route path='/about'>
									<About people={COPY.people} />
								</Route>
								<Route path='/video'>
									<Video videos={COPY.video} />
								</Route>
								<Route path='/' exact>
									<Home />
								</Route>
								<Route component={NotFound}></Route>
							</Switch>
						</AnimatePresence>
					</ContentWrapper>
				</MainWrapper>
			</Layout>
		</div>
	)
}

export default App
