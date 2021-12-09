import styled from 'styled-components'
import { MARGIN, PADDING, BORDER_RADIUS, SHADOW } from '../theme/Theme'

const Textarea = styled.textarea`
	height: 200px;
	border: none;
	border-radius: ${BORDER_RADIUS.M};
	resize: none;
	padding: ${PADDING.XS} ${PADDING.S} ${PADDING.XS} ${PADDING.S};
	margin: ${MARGIN.S} ${MARGIN.XS} ${MARGIN.S} ${MARGIN.XS};
	box-shadow: ${SHADOW.S};

	@media (min-width: 769px) {
		width: 90%;
	}
`

export default Textarea
