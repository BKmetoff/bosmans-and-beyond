import React from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Theme } from '../theme/Theme'

import Footer from '../Footer'

const Layout = (props) => {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			{props.children}
			<Footer />
		</ThemeProvider>
	)
}

export default Layout
