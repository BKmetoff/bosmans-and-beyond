import React from 'react'
import Layout from './components/backbone/Layout'
import { Switch, Route, useLocation } from 'react-router-dom'

// import { AnimatePresence } from 'framer-motion'

import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Video from './components/Pages/Video'
import NotFound from './components/Pages/NotFound'
import Contact from './components/Pages/Contact'
import Success from './components/Pages/Success'
import Repertoire from './components/Pages/Repertoire'

import { MainWrapper, ContentWrapper } from './components/backbone/Wrapper'

const routesMap = [
	{ component: Home, exact: true, path: '/' },
	{ component: About, path: '/about' },
	{ component: Video, path: '/video' },
	{ component: Contact, path: '/contact' },
	{ component: Success, path: '/success' },
	{ component: Repertoire, path: '/repertoire' },
	{ component: NotFound, path: '' },
]

function App() {
	const location = useLocation()
	return (
		<div className='App'>
			<Layout>
				<MainWrapper>
					<ContentWrapper>
						{/* <AnimatePresence exitBeforeEnter> */}
						<Switch location={location} key={location.pathname}>
							{routesMap.map((props) => {
								return <Route key={props.path} {...props} />
							})}
						</Switch>
						{/* </AnimatePresence> */}
					</ContentWrapper>
				</MainWrapper>
			</Layout>
		</div>
	)
}

export default App
