import React from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Theme } from '../theme/Theme'

const Layout = (props) => {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			{props.children}
		</ThemeProvider>
	)
}

export default Layout
