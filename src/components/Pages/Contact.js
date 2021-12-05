import React from 'react'

import { SectionWrapper, MotionWrapper } from '../backbone/Wrapper'
import { Text } from '../backbone/Text'
import Form from '../backbone/Form'
import Sheet from '../backbone/Sheet'

import CONTACT from '../../data/Contact/Contact'

export default function Contact() {
	return (
		<MotionWrapper>
			<SectionWrapper>
				<Sheet reversed marginXL>
					<Text>{CONTACT}</Text>
					<Form />
				</Sheet>
			</SectionWrapper>
		</MotionWrapper>
	)
}
