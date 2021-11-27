import React from 'react'
import styled from 'styled-components'

import { Theme } from './theme/Theme'

import ElisavetaImage from '../assets/musicians/Elizaveta.jpg'
import NataliaImage from '../assets/musicians/Natalia.jpg'
import DimitriImage from '../assets/musicians/Dimitri.jpg'

import { SectionWrapper, MotionWrapper } from './backbone/Wrapper'
import Sheet from './backbone/Sheet'
import { Text, Title } from './backbone/Text'
import { Divider } from './backbone/Divider'

import Image from './backbone/Image'

const PageWrapper = styled(SectionWrapper)`
	margin-top: ${Theme.margin.XXL};
`

export default function About({ people }) {
	const { elisaveta, natalia, dimitri } = { ...people }

	return (
		<MotionWrapper>
			<PageWrapper>
				<Title>About us</Title>
				<Sheet>
					<Image
						round
						shadow
						width='300px'
						height='300px'
						src={ElisavetaImage}
					/>
					<Text>{elisaveta.bio}</Text>
				</Sheet>
				<Divider />
				<Sheet reversed>
					<Image round shadow width='300px' height='300px' src={NataliaImage} />
					<Text>{natalia.bio}</Text>
				</Sheet>
				<Divider />
				<Sheet>
					<Image round shadow width='300px' height='300px' src={DimitriImage} />
					<Text>{dimitri.bio}</Text>
				</Sheet>
			</PageWrapper>
		</MotionWrapper>
	)
}
