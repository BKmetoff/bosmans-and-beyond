import { createGlobalStyle } from 'styled-components'

export const Theme = {
	borderRadius: '3px',
	shadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
	colors: {
		primary: '#1e2548',
		light: '#fff',
		hover: '',
	},
	margin: {
		auto: 'auto',
		XS: '10px',
		S: '15px',
		M: '30px',
		L: '50px',
		XL: '80px',
	},
	padding: {
		XS: '10px',
		S: '15px',
		M: '30px',
		L: '50px',
		XL: '80px',
	},
}

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
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
    color: white;
    :hover {
      cursor: pointer;
    }
  }

  ::placeholder {
    text-align: center;
  }

`
