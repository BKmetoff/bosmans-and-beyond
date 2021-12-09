import styled from 'styled-components'
import BaseButton from './BaseButton'
import { COLORS, MARGIN, SHADOW, BORDER_RADIUS } from '../../theme/Theme'

export const StandaloneButton = styled(BaseButton)`
	align-self: center;
	color: ${COLORS.dark};
	background-color: ${COLORS.background};
	border-radius: ${BORDER_RADIUS.M};
	border: 1px solid ${COLORS.background};
	margin-top: ${MARGIN.S};
	box-shadow: ${SHADOW.button};
	padding: ${MARGIN.XS} ${MARGIN.S} ${MARGIN.XS} ${MARGIN.S};
	:hover {
		background-color: ${COLORS.accent};
		box-shadow: ${SHADOW.M};
	}
`
