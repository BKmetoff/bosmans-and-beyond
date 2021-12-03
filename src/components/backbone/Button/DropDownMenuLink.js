import styled from 'styled-components'
import { Theme } from '../../theme/Theme'

import Button from '../Button'

export const DropDownMenuLink = styled(Button)`
	width: 25%;
	height: 45px;
	text-align: right;
	color: ${Theme.colors.light};
	background-color: ${Theme.colors.dark};
	border-bottom: 1px solid ${Theme.colors.accent};
	padding-right: ${Theme.padding.XS};
	margin-right: ${Theme.margin.S};
	margin-bottom: ${Theme.margin.S};
`
