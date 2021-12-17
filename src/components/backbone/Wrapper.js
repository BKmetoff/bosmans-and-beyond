import React from 'react'
import { motion } from 'framer-motion'

import styled, { css } from 'styled-components'
import { COLORS, MARGIN, PAGE_TRANSITIONS, BORDER_RADIUS } from '../theme/Theme'

export const MainWrapper = styled.div`
	max-width: 1024px;

	height: 100%;
	margin-left: ${MARGIN.auto};
	margin-right: ${MARGIN.auto};
	box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
	border-bottom-left-radius: ${BORDER_RADIUS.M};
	border-bottom-right-radius: ${BORDER_RADIUS.M};
`

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: ${COLORS.background};
	border-bottom-left-radius: ${BORDER_RADIUS.M};
	border-bottom-right-radius: ${BORDER_RADIUS.M};

	${({ videoWidth }) =>
		videoWidth !== undefined &&
		css`
			width: 65vw !important;
			margin-left: auto;
			margin-right: auto;
		`}
`

export const SectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: ${MARGIN.M};
	margin-left: ${MARGIN.L};
	margin-right: ${MARGIN.L};

	@media (max-width: 769px) {
		margin-left: 0px;
		margin-right: 0px;
	}

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
