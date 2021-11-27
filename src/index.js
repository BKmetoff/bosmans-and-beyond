import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

function ScrollToTop() {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTop />
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
serviceWorker.unregister()
