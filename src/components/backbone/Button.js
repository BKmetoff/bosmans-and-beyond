import styled, { css } from 'styled-components'
import { Theme } from '../theme/Theme'

const BaseButton = styled.button`
	font-size: 16px;
	min-width: 80px;
	outline: none;
	border: none;
	:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`

const types = {
	primary: css`
		color: ${Theme.colors.light};
		background-color: ${Theme.colors.primary};
	`,

	headerLink: css`
		height: 100%;
		color: ${Theme.colors.light};
		background-color: ${Theme.colors.primary};
		font-size: 18px;
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
