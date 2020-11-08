import React from 'react'

import { SectionWrapper, MotionWrapper } from './backbone/Wrapper'
import { Title, Text } from './backbone/Text'
import Form from './backbone/Form'
import Sheet from './backbone/Sheet'

export default function Contact({ contact }) {
	return (
		<MotionWrapper>
			<SectionWrapper>
				<Title>Contact</Title>
				<Sheet reversed>
					<Text>{contact}</Text>
					<Form />
				</Sheet>
			</SectionWrapper>
		</MotionWrapper>
	)
}
