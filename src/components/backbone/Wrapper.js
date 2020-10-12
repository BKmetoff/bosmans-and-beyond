import styled from 'styled-components'
import { Theme } from '../theme/Theme'

export const MainWrapper = styled.div`
	top: ${Theme.margin.L};
	/* position: absolute; */
	/* height: 100vh; */
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const ContentWrapper = styled.div`
	max-width: 1024px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: ${Theme.margin.XL};
	margin-bottom: ${Theme.margin.XL};
`

export const SectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: ${Theme.margin.L};
	margin-bottom: ${Theme.margin.L};
`
