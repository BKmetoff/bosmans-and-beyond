import styled, { css } from 'styled-components'
import { Theme } from '../theme/Theme'


const Sheet = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: ${Theme.margin.S};
	padding: ${Theme.padding.S};
	
	@media (min-width: 768px) {
		flex-direction: row;
		
		${(props) =>
			props.reversed !== undefined &&
			css`
				flex-direction: row-reverse;
			`}
	}


`

export default Sheet
