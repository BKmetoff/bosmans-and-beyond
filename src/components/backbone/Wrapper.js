import React from 'react'
import { motion } from 'framer-motion'

import styled, { css } from 'styled-components'
import { MARGIN, PAGE_TRANSITIONS } from '../theme/Theme'

export const MainWrapper = styled.div`
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
	margin-bottom: ${MARGIN.L};

	@media (min-width: 1024px) {
		width: 1024px;
	}

	${({ width }) =>
		width !== undefined &&
		css`
			width: 65vw !important;
			margin-left: auto;
			margin-right: auto;
		`}

	@media (max-width: 769px) {
		margin-top: ${MARGIN.M};
	}
`

export const SectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: ${MARGIN.XL};
	margin-bottom: ${MARGIN.M};

	${({ extraMargin }) =>
		extraMargin !== undefined &&
		css`
			margin-top: ${MARGIN.XL};
		`}
`

export const MotionWrapper = ({ children }) => {
	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={PAGE_TRANSITIONS.variants}
			transition={PAGE_TRANSITIONS.transitions}
		>
			{children}
		</motion.div>
	)
}
