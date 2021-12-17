import styled, { css } from 'styled-components'
import { PADDING, MARGIN, COLORS } from '../theme/Theme'

export const Text = styled.p`
	font-size: 16px;
	text-align: justify;
	padding: ${PADDING.S};

	${({ footer }) =>
		footer !== undefined &&
		css`
			padding: 0;
			font-size: 14px;
			@media (max-width: 768px) {
				font-size: 12px;
				padding-bottom: 0;
			}
		`}

	${({ externalLink }) =>
		externalLink !== undefined &&
		css`
			font-style: italic;
			font-size: 16px;
			color: ${COLORS.primary};
			padding-top: ${PADDING.none};

			a {
				:hover {
					border-bottom: 1px solid ${COLORS.accent};
				}
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
	margin-right: ${MARGIN.M};
	border-bottom: 1px solid ${COLORS.primary};

	${({ secondary }) =>
		secondary !== undefined &&
		css`
			font-size: 22px;
			border-bottom: 0;
			margin-right: ${MARGIN.S};

			@media (max-width: 768px) {
				font-size: 20px;
			}
		`}

	${({ listTitle }) =>
		listTitle !== undefined &&
		css`
			font-size: 26px;
			width: 300px;
			margin-left: ${MARGIN.auto};

			@media (max-width: 768px) {
				font-size: 28px;
				text-align: left;
				margin-left: 5px;
			}
		`}
`
