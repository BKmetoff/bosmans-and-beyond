import styled from 'styled-components'
import { Theme } from '../theme/Theme'

const Textarea = styled.textarea`
	height: 200px;
	border: none;
	border-radius: ${Theme.borderRadiusM};
	resize: none;
	padding: ${Theme.padding.XS} ${Theme.padding.S} ${Theme.padding.XS}
		${Theme.padding.S};
	margin: ${Theme.margin.S} ${Theme.margin.XS} ${Theme.margin.S}
		${Theme.margin.XS};
	box-shadow: ${Theme.shadow.S};

	@media (min-width: 769px) {
		width: 90%;
	}
`

export default Textarea
