import styled, { css } from 'styled-components'
import { Theme } from '../theme/Theme'

const Sheet = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: ${Theme.margin.S};
	padding: ${Theme.padding.S};

	${(props) =>
		props.reversed !== undefined &&
		css`
			flex-direction: row-reverse;
		`}
`

export default Sheet
