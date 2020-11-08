import React from 'react'
import Layout from './components/backbone/Layout'
import { Switch, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

import { COPY, VIDEOS } from './components/resources/Resources'

import Home from './components/Home'
import About from './components/About'
import Video from './components/Video'
import NotFound from './components/NotFound'
import Contact from './components/Contact'
import Success from './components/Success'

import { MainWrapper, ContentWrapper } from './components/backbone/Wrapper'

function App() {
	const location = useLocation()
	return (
		<div className='App'>
			<Layout headerLinks={COPY.headerLinks}>
				<MainWrapper>
					<ContentWrapper>
						<AnimatePresence exitBeforeEnter>
							<Switch location={location} key={location.pathname}>
								<Route path='/about'>
									<About people={COPY.people} />
								</Route>
								<Route path='/video'>
									<Video videos={VIDEOS} />
								</Route>
								<Route path='/contact'>
									<Contact contact={COPY.text.contact} />
								</Route>
								<Route path='/success'>
									<Success />
								</Route>
								<Route path='/' exact>
									<Home mission={COPY.text.mission} patron={COPY.text.patron} />
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
