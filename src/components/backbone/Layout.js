import React from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Theme } from '../theme/Theme'

import Footer from '../Footer'
import Header from '../Header'

const Layout = (props) => {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<Header headerLinks={props.headerLinks} />
			{props.children}
			<Footer />
		</ThemeProvider>
	)
}

export default Layout
