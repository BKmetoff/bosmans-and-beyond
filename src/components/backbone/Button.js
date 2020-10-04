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
		margin-left: ${Theme.margin.S};
		transition: 0.1s;
		transition-delay: 0.1s;
		:hover {
			border-bottom: 2px solid ${Theme.colors.accent};
			box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
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
