import styled, { css } from 'styled-components'
import { Theme } from './theme/Theme'

const BaseButton = styled.button`
	min-width: 25px;
	outline: none;
	border: none;
	:hover {
		cursor: pointer;
		opacity: 0.9;
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
		border-bottom: 5px solid ${Theme.colors.light};
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
