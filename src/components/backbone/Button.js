import styled, { css } from 'styled-components'
import { Theme } from '../theme/Theme'

const BaseButton = styled.button`
	font-size: 16px;
	min-width: 80px;
	outline: none;
	border: none;
	:hover {
		cursor: pointer;
	}

	a {
		font-family: 'Open Sans', 'sans-serif';
		letter-spacing: 1px;
		text-decoration: none;
		color: inherit;
		background-color: inherit;
	}
`

const kinds = {
	primary: css`
		align-self: center;
		color: ${Theme.colors.dark};
		background-color: ${Theme.colors.accent};

		border-radius: ${Theme.borderRadius};
		border: 1px solid ${Theme.colors.dark};
		margin-top: ${Theme.margin.M};
		padding: ${Theme.margin.XS} ${Theme.margin.S} ${Theme.margin.XS}
			${Theme.margin.S};
		:hover {
			transform: ${Theme.hoverScale};
		}
	`,

	headerLink: css`
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
	`,

	menuLink: css`
		width: 25%;
		height: 45px;
		text-align: right;
		color: ${Theme.colors.light};
		background-color: ${Theme.colors.dark};
		border-bottom: 1px solid ${Theme.colors.accent};
		padding-right: ${Theme.padding.XS};
		margin-right: ${Theme.margin.S};
		margin-bottom: ${Theme.margin.S};
	`,
}

const Button = styled(BaseButton)`
	${({ kind }) => kinds[kind]}
`

export default Button
