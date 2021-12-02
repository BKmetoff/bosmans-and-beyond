import React from 'react'

import { SectionWrapper, MotionWrapper } from '../backbone/Wrapper'
import { Text } from '../backbone/Text'
import Form from '../backbone/Form'
import Sheet from '../backbone/Sheet'

export default function Contact({ contact }) {
	return (
		<MotionWrapper>
			<SectionWrapper>
				<Sheet reversed marginXL>
					<Text>{contact}</Text>
					<Form />
				</Sheet>
			</SectionWrapper>
		</MotionWrapper>
	)
}
