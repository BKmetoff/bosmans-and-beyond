import styled from 'styled-components'
import { COLORS, MARGIN, PADDING } from '../../theme/Theme'

import BaseButton from './BaseButton'

export const DropDownMenuLink = styled(BaseButton)`
	width: 50%;
	height: 45px;
	text-align: right;
	color: ${COLORS.light};
	background-color: ${COLORS.opaque};
	border-bottom: 1px solid ${COLORS.accent};
	padding-right: ${PADDING.XS};
	margin-right: ${MARGIN.S};
	margin-bottom: ${MARGIN.S};
	margin-top: ${MARGIN.S};
	font-size: 24px;
	display: flex;
	text-align: right;

	a {
		width: 100%;
		height: 100%;
	}
`
