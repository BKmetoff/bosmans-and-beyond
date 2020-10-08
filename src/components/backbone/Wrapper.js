import styled from 'styled-components'
import { Theme } from '../theme/Theme'

export const MainWrapper = styled.div`
	/* padding-top: 60px; */
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const ContentWrapper = styled.div`
	max-width: 1024px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const SectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: ${Theme.margin.L};
`
