import styled, { css } from 'styled-components'
import { Theme } from '../theme/Theme'

const Sheet = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: ${Theme.margin.S};
	padding: ${Theme.padding.S};
	border-radius: 0;

	${({ marginXL }) =>
		marginXL !== undefined &&
		css`
			margin-top: ${Theme.margin.XL};
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
