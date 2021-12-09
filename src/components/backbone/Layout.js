import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'

import GlobalStyle from '../theme/GlobalStyle'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = ({ children }) => {
	const [headerIsTransparent, setHeaderIsTransparent] = useState(true)
	let currentPage = useHistory().location.pathname

	const setHeaderTransparency = () => {
		if (currentPage !== '/') {
			setHeaderIsTransparent(false)
			return
		}

		window.scrollY > 50
			? setHeaderIsTransparent(false)
			: setHeaderIsTransparent(true)
	}

	useEffect(() => {
		setHeaderTransparency()
	})

	document.addEventListener('scroll', setHeaderTransparency)
	return (
		<>
			<GlobalStyle />
			<Header headerIsTransparent={headerIsTransparent} />
			{children}
			<Footer />
		</>
	)
}

export default Layout
