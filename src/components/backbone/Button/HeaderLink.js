import styled, { css } from 'styled-components'
import { Theme } from '../../theme/Theme'

import Button from '../Button'

export const HeaderLink = styled(Button)`
	height: 100%;
	color: ${Theme.colors.light};
	background-color: ${Theme.colors.dark};
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
			color: ${Theme.colors.dark};
			background-color: inherit;
		`}
`
