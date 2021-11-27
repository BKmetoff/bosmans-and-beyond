import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Theme } from '../theme/Theme'

import Footer from '../Footer'
import Header from '../Header'

const Layout = (props) => {
	const [headerIsShown, setHeaderIsShown] = useState(false)
	let currentPage = useHistory().location.pathname

	const setDisplayHeader = () => {
		if (currentPage !== '/') {
			setHeaderIsShown(true)
			return
		}

		window.scrollY > 170 ? setHeaderIsShown(true) : setHeaderIsShown(false)
	}

	useEffect(() => {
		setDisplayHeader()
	})

	document.addEventListener('scroll', setDisplayHeader)
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<Header headerLinks={props.headerLinks} headerIsShown={headerIsShown} />
			{props.children}
			<Footer />
		</ThemeProvider>
	)
}

export default Layout
