import React from 'react'
import { motion } from 'framer-motion'

import styled from 'styled-components'
import { Theme } from '../theme/Theme'

export const MainWrapper = styled.div`
	position: relative;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: ${Theme.margin.XL};
	margin-bottom: ${Theme.margin.M};
	margin-left: ${Theme.margin.M};
	margin-right: ${Theme.margin.M};

	@media (min-width: 1366px) {
		width: 1366px;
	}
`

export const SectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: ${Theme.margin.L};
	margin-bottom: ${Theme.margin.L};
`

export const MotionWrapper = (props) => {
	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={Theme.pageTransitions.variants}
			transition={Theme.pageTransitions.transitions}
		>
			{props.children}
		</motion.div>
	)
}
