import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { SectionWrapper, MotionWrapper } from '../backbone/Wrapper'
import { StandaloneButton } from '../backbone/Button/Standalone'
import { Title } from '../backbone/Text'

const NotFoundTitle = styled(Title)`
	width: fit-content;
	border: none;
	margin: 20px 0px 0px 0px;
	display: flex;
	align-self: center;
`

export default function NotFound() {
	return (
		<MotionWrapper>
			<SectionWrapper>
				<NotFoundTitle>
					Oops, we couldn't find what you were looking for!
				</NotFoundTitle>
				<StandaloneButton>
					<Link to='/'>Go home </Link>
				</StandaloneButton>
			</SectionWrapper>
		</MotionWrapper>
	)
}
