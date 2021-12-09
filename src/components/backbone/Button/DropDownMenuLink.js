import styled from 'styled-components'
import { COLORS, MARGIN, PADDING } from '../../theme/Theme'

import BaseButton from './BaseButton'

export const DropDownMenuLink = styled(BaseButton)`
	width: 25%;
	height: 45px;
	text-align: right;
	color: ${COLORS.light};
	background-color: ${COLORS.dark};
	border-bottom: 1px solid ${COLORS.accent};
	padding-right: ${PADDING.XS};
	margin-right: ${MARGIN.S};
	margin-bottom: ${MARGIN.S};
`
