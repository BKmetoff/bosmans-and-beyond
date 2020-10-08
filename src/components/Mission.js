import React from 'react'
import styled from 'styled-components'

import { COPY } from '../components/resources/Resources'
import patronImage from '../assets/Patron.png'

import { SectionWrapper } from './backbone/Wrapper'
import Sheet from './backbone/Sheet'
import { Text, Title } from './backbone/Text'
import Image from './backbone/Image'

export default function Mission() {
	return (
		<React.Fragment>
			<SectionWrapper>
				<Title>Our Mission</Title>
				<Sheet>
					<Text>{COPY.text.mission}</Text>
				</Sheet>
			</SectionWrapper>
			<SectionWrapper>
				<Title>Our Patron</Title>
				<Sheet>
					<Image round src={patronImage} width='300px' height='300px' />
					<Text>{COPY.text.patron}</Text>
				</Sheet>
			</SectionWrapper>
		</React.Fragment>
	)
}
