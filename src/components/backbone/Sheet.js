import styled from 'styled-components'
import { Theme } from '../theme/Theme'

const Sheet = styled.div`
	display: flex;
	flex-direction: row;
	/* background-color: cornflowerblue; */
	margin-top: 10px;
	padding: ${Theme.padding.S};
`

// const Sheet = styled(BaseSheet)``

export default Sheet
