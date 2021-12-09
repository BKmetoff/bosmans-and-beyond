import styled from 'styled-components'
import { MARGIN, SHADOW, COLORS } from '../theme/Theme'

export const Divider = styled.div`
	margin: ${MARGIN.XS} 0 ${MARGIN.M} 0;
	height: 1px;
	width: 40%;
	align-self: center;
	border-top: 1px solid ${COLORS.accent};
	box-shadow: ${SHADOW.M};

	@media (min-width: 768px) {
		display: none;
	}
`
