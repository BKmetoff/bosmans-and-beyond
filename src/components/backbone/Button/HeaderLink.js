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
	box-sizing: border-box;

	:hover {
		padding-top: 3px;
		border-bottom: 3px solid ${Theme.colors.accent};
	}

	${({ headerIsTransparent }) =>
		headerIsTransparent &&
		css`
			transition: inherit;
			color: inherit;
			background-color: inherit;
		`}
`
