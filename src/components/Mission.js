import React from 'react'

import patronImage from '../assets/Patron.png'

import { MotionWrapper } from './backbone/Wrapper'
import Sheet from './backbone/Sheet'
import { Text, Title } from './backbone/Text'
import Image from './backbone/Image'

export default function Mission(props) {
	return (
		<MotionWrapper>
			<Title>Our Mission</Title>
			<Sheet>
				<Text>{props.mission}</Text>
			</Sheet>
			<Title>Our Patron</Title>
			<Sheet>
				<Image round shadow src={patronImage} width='300px' height='300px' />
				<Text>{props.patron}</Text>
			</Sheet>
		</MotionWrapper>
	)
}
