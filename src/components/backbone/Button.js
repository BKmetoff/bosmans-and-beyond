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

const types = {
	primary: css`
		/* width: 100px;
		height: 30px; */
		align-self: center;
		color: ${Theme.colors.primary};
		background-color: ${Theme.colors.light};

		border-radius: ${Theme.borderRadius};
		border: 1px solid ${Theme.colors.primary};
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
}

const Button = styled(BaseButton)`
	${({ type }) => types[type]}
`

export default Button
