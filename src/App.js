import React from 'react'
import Layout from './components/backbone/Layout'
import { Switch, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

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
			<Layout>
				<MainWrapper>
					<ContentWrapper>
						<AnimatePresence exitBeforeEnter>
							<Switch location={location} key={location.pathname}>
								<Route path='/about'>
									<About />
								</Route>
								<Route path='/video'>
									<Video />
								</Route>
								<Route path='/contact'>
									<Contact />
								</Route>
								<Route path='/repertoire'>
									<Repertoire />
								</Route>
								<Route path='/success'>
									<Success />
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
