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
		color: ${Theme.colors.light};
		background-color: ${Theme.colors.dark};
	`,

	headerLink: css`
		height: 100%;
		color: ${Theme.colors.light};
		background-color: ${Theme.colors.dark};
		font-size: 18px;
		padding-left: ${Theme.margin.XS};
		padding-right: ${Theme.margin.XS};
		margin-right: ${Theme.margin.S};
		transition: 0.1s;
		transition-delay: 0.1s;
		:hover {
			border-bottom: 2px solid ${Theme.colors.accent};
			box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
			-webkit-box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
			-moz-box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
		}
	`,

	inverted: css`
		color: ${Theme.colors.primary};
		background-color: ${Theme.colors.light};
	`,
}

const Button = styled(BaseButton)`
	${({ type }) => types[type]}
`

export default Button
