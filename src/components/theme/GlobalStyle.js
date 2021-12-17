import { createGlobalStyle } from 'styled-components'

import OpenSans from '../../fonts/OpenSans.woff'
import OpenSans2 from '../../fonts/OpenSans.woff2'

import { COLORS } from './Theme'

// <div>Font made from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>is licensed by CC BY 3.0</div>

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: local('Open Sans'), local('OpenSans')
    url(${OpenSans}), format('woff'),
    url(${OpenSans2}), format('woff2');
    font-weight: 400;
  }

  body {
  background: ${COLORS.body};
  margin: 0;
  font-family: 'Open Sans', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  letter-spacing: 1px;
  line-height: 1.9;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
    /* overflow-x: hidden; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: transparent;
  }

	a {
		text-decoration: none;
		color: inherit;
	}

	textarea,
	input,
	::placeholder {
		font-size:14px;
		letter-spacing: 1px;
		line-height: 1.9;
		font-family: 'Open Sans', 'sans-serif', -apple-system, BlinkMacSystemFont,
		'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
		'Droid Sans', 'Helvetica Neue', sans-serif;
	}
`

export default GlobalStyle
