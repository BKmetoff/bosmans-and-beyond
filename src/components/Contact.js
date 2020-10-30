import React from 'react'

import { SectionWrapper, MotionWrapper } from './backbone/Wrapper'
import Form from './backbone/Form'

export default function Contact() {
	return (
		<MotionWrapper>
			<SectionWrapper>
				<Form />
			</SectionWrapper>
		</MotionWrapper>
	)
}
