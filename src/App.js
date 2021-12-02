import React from 'react'
import Layout from './components/backbone/Layout'
import { Switch, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

import { COPY, VIDEOS, REPERTOIRE } from './components/resources/Resources'

import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Video from './components/Pages/Video'
import NotFound from './components/Pages/NotFound'
import Contact from './components/Pages/Contact'
import Success from './components/Pages/Success'
import Repertoire from './components/Pages/Repertoire'

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
									<About />
								</Route>
								<Route path='/video'>
									<Video videos={VIDEOS} />
								</Route>
								<Route path='/contact'>
									<Contact contact={COPY.text.contact} />
								</Route>
								<Route path='/repertoire'>
									<Repertoire repertoire={REPERTOIRE} />
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
