import styled from 'styled-components'
import { PADDING, BORDER_RADIUS, MARGIN, SHADOW } from '../theme/Theme'

const Input = styled.input`
	height: 40px;
	padding-left: ${PADDING.S};
	padding-right: ${PADDING.S};
	border: none;
	border-radius: ${BORDER_RADIUS.M};
	margin-bottom: ${MARGIN.XS};
	margin-top: ${MARGIN.S};
	margin-left: ${MARGIN.XS};
	margin-right: ${MARGIN.XS};
	box-shadow: ${SHADOW.S};
`
export default Input
