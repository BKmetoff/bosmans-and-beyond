import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { SectionWrapper, MotionWrapper } from '../backbone/Wrapper'
import Button from '../backbone/Button'
import { Title } from '../backbone/Text'

const NotFoundTitle = styled(Title)`
	width: fit-content;
	border: none;
	margin: 0;
	display: flex;
	text-align: center;
`

export default function NotFound() {
	return (
		<MotionWrapper>
			<SectionWrapper>
				<NotFoundTitle>
					Oops, we couldn't find what you were looking for!
				</NotFoundTitle>
				<Button kind='primary'>
					<Link to='/'>Go home </Link>
				</Button>
			</SectionWrapper>
		</MotionWrapper>
	)
}
