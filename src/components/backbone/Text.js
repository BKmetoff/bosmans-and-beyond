import styled, { css } from 'styled-components'
import { Theme } from '../theme/Theme'

export const Text = styled.p`
	font-size: 18px;
	text-align: justify;
	padding: ${Theme.padding.S};

	${(props) =>
		props.footer !== undefined &&
		css`
			padding: 0;
			padding-left: ${Theme.padding.XS};
			font-size: 14px;
			@media (max-width: 768px) {
				font-size: 12px;
				padding-bottom: 0;
			}
		`}
`

export const Title = styled.h1`
	letter-spacing: -0.5px;
	font-size: 28px;
	font-weight: 300;
	width: 200px;
	text-align: end;
	align-self: flex-end;
	margin-right: ${Theme.margin.M};
	border-bottom: 1px solid ${Theme.colors.dark};
`
