import { createGlobalStyle } from 'styled-components'

import OpenSans from '../../fonts/OpenSans.woff'
import OpenSans2 from '../../fonts/OpenSans.woff2'

// <div>Font made from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>is licensed by CC BY 3.0</div>

export const Theme = {
	opacity: 0.9,
	borderRadius: '3px',
	borderRadiusM: '5px',
	hoverScale: 'scale(1.05)',
	shadow: {
		S: '0 1px 10px rgba(0, 0, 0, 0.2)',
		M: '0 4px 20px rgba(0, 0, 0, 0.2)',
		inverted: '0 -4px 20px rgba(0, 0, 0, 0.2)',
	},

	colors: {
		primary: '#6083ad',
		light: '#e2e2e2',
		lightTest: '#f2f2f4',
		dark: '#363b3e',
		backgroundFrom: '#dce0df',
		backgroundTo: '#e0e4e3',
		accent: '#fcd088',
	},

	margin: {
		auto: 'auto',
		XS: '8px',
		S: '12px',
		M: '30px',
		L: '50px',
		XL: '80px',
	},

	padding: {
		XXS: '5px',
		XS: '10px',
		S: '15px',
		M: '30px',
		L: '50px',
		XL: '80px',
	},

	pageTransitions: {
		variants: {
			initial: { opacity: 0, y: '-10vh' },
			in: { opacity: 1, y: 0 },
			out: { opacity: 0, y: '10vh' },
		},
		transitions: {
			type: 'tween',
			ease: 'linear',
			duration: 0.25,
		},
	},
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: local('Open Sans'), local('OpenSans')
    url(${OpenSans}), format('woff'),
    url(${OpenSans2}), format('woff2');
    font-weight: 400;
  }
  
  body {
  background: linear-gradient(to right, ${Theme.colors.backgroundFrom} 0%, ${Theme.colors.backgroundTo} 100%); ;
  margin: 0;
  font-family: 'Open Sans', 'sans-serif';
  letter-spacing: 1px;
  line-height: 1.9;
  
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif; */
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
`
