import styled, { css } from 'styled-components'
import { MARGIN, PADDING } from '../theme/Theme'

const Sheet = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: ${MARGIN.S};
	padding: ${PADDING.S};
	border-radius: 0;

	${({ marginXL }) =>
		marginXL !== undefined &&
		css`
			margin-top: ${MARGIN.XL};
		`}

	@media (min-width: 769px) {
		align-items: flex-start;
		flex-direction: row;

		${({ reversed }) =>
			reversed &&
			css`
				flex-direction: row-reverse;
			`}
	}
`

export default Sheet
