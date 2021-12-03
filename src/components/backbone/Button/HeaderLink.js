import styled, { css } from 'styled-components'
import { Theme } from '../../theme/Theme'

import Button from '../Button'

// inherits styles
// from Header.js

export const HeaderLink = styled(Button)`
	transition: inherit;
	height: 100%;
	color: inherit;
	background-color: inherit;
	font-size: 18px;
	padding-left: ${Theme.margin.XS};
	padding-right: ${Theme.margin.XS};
	margin-right: ${Theme.margin.S};
	:hover {
		transform: ${Theme.hoverScale};
		border-bottom: 2px solid ${Theme.colors.accent};
		box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
		-webkit-box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
		-moz-box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
	}

	${({ headerIsTransparent }) =>
		headerIsTransparent &&
		css`
			transition: inherit;
			color: inherit;
			background-color: inherit;
			:hover {
				box-shadow: none;
			}
		`}
`
