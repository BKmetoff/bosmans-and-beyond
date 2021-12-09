import styled, { css } from 'styled-components'
import { COLORS, MARGIN } from '../../theme/Theme'

import BaseButton from './BaseButton'

// inherits styles
// from Header.js

export const HeaderLink = styled(BaseButton)`
	transition: inherit;
	height: 100%;
	color: inherit;
	background-color: inherit;
	font-size: 18px;
	padding-left: ${MARGIN.XS};
	padding-right: ${MARGIN.XS};
	margin-right: ${MARGIN.S};
	box-sizing: border-box;

	:hover {
		padding-top: 3px;
		border-bottom: 3px solid ${COLORS.accent};
	}

	${({ headerIsTransparent }) =>
		headerIsTransparent &&
		css`
			transition: inherit;
			color: inherit;
			background-color: inherit;
		`}
`
