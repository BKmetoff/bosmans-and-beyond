import styled from 'styled-components'
import BaseButton from './BaseButton'
import { Theme } from '../../theme/Theme'

export const StandaloneButton = styled(BaseButton)`
	align-self: center;
	color: ${Theme.colors.dark};
	background-color: ${Theme.colors.background};
	border-radius: ${Theme.borderRadiusM};
	border: 1px solid ${Theme.colors.background};
	margin-top: ${Theme.margin.S};
	box-shadow: ${Theme.shadow.button};
	padding: ${Theme.margin.XS} ${Theme.margin.S} ${Theme.margin.XS}
		${Theme.margin.S};
	:hover {
		background-color: ${Theme.colors.accent};
		box-shadow: ${Theme.shadow.M};
	}
`
