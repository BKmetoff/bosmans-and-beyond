import styled, { css } from 'styled-components'
import { Theme } from '../theme/Theme'

const Sheet = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: ${Theme.margin.L};
	padding: ${Theme.padding.S};
	/* background-color: ${Theme.colors.lightTest}; */
	/* box-shadow: ${Theme.shadow.S}; */
	border-radius: 0;

	@media (min-width: 768px) {
		border-radius: ${Theme.borderRadius};
		flex-direction: row;

		${(props) =>
			props.reversed !== undefined &&
			css`
				flex-direction: row-reverse;
			`}
	}
`

export default Sheet
